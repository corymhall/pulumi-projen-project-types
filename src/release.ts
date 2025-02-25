import * as path from 'path';
import { Construct } from 'constructs';
import { Project, Task } from 'projen';
import { GitHub } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { Release as ProjenRelease, ReleaseTrigger } from 'projen/lib/release';
import { TagReleaseOptions } from './TagReleaseOptions';

export class ReleaseWorkflow extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const project = Project.of(this);
    const github = GitHub.of(project);
    if (!github) {
      throw new Error('ReleaseWorkflow requires a GitHub Project');
    }

    const workflowName = 'github-release';

    if (github.tryFindWorkflow(workflowName)) {
      throw new Error('A release workflow already exists');
    }

    const release = github.addWorkflow(workflowName);
    release.runName = 'Release ${{ github.ref_name }}';
    release.on({ push: { tags: ['v*.*.*'] } });

    release.addJob('publish-to-github-release', {
      permissions: {
        contents: JobPermission.WRITE,
      },
      steps: [
        {
          id: 'release-exists',
          name: 'Verify if release exists',
          run: [
            'if gh release view ${{ github.ref_name }} --repo=${{ github.repository }} &>/dev/null',
            'then',
            'echo "result=true" >> $GITHUB_OUTPUT',
            'else',
            'echo "result=false" >> $GITHUB_OUTPUT',
            'fi',
          ].join('\n'),
          env: {
            GH_TOKEN: '${{ github.token }}',
          },
        },
        {
          name: 'Create Release',
          if: '!fromJSON(steps.release-exists.outputs.result)',
          run: [
            'gh release create ${{ github.ref_name }}',
            '--repo=${{ github.repository }}',
            '--notes-from-tag',
            '--title=${{ github.ref_name }}',
            '--verify-tag',
          ].join(' '),
          env: {
            GH_TOKEN: '${{ github.token }}',
          },
        },
      ],
      name: 'Publish to GitHub Release',
    });
  }
}

export class TagRelease extends ProjenRelease {
  public readonly publishTask: Task;
  constructor(scope: Construct, props: TagReleaseOptions) {
    super(scope, {
      ...props,
      githubRelease: false,
    });

    const releaseTrigger = props.releaseTrigger ?? ReleaseTrigger.continuous();

    const changelogFileName = 'changelog.md';
    const versionFileName = 'version.txt';
    const releaseTagFileName = 'releasetag.txt';

    const changelogFile = path.posix.join(
      this.artifactsDirectory,
      changelogFileName,
    );
    const releaseTagFile = path.posix.join(
      this.artifactsDirectory,
      releaseTagFileName,
    );
    const versionFile = path.posix.join(
      this.artifactsDirectory,
      versionFileName,
    );

    this.publishTask = this.publisher.publishToGit({
      changelogFile,
      releaseTagFile,
      versionFile,
      projectChangelogFile: releaseTrigger.changelogPath,
      gitBranch: props.branch,
      gitPushCommand: releaseTrigger.gitPushCommand,
    });

    const project = Project.of(this);
    const releaseTask = project.tasks.tryFind('release');
    if (!releaseTask) {
      throw new Error('Could not find release task');
    }
    releaseTask.spawn(this.publishTask);
  }
}
