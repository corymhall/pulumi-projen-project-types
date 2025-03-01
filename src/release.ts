import * as path from 'path';
import { Construct } from 'constructs';
import { Project, Task } from 'projen';
import { GitHub, WorkflowSteps } from 'projen/lib/github';
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
      runsOn: ['ubuntu-latest'],
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
            GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
          },
        },
        {
          name: 'Create Release',
          if: '!fromJSON(steps.release-exists.outputs.result)',
          run: [
            'gh release create ${{ github.ref_name }}',
            '--notes-from-tag',
            '--title=${{ github.ref_name }}',
            '--verify-tag',
          ].join(' '),
          env: {
            GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
          },
        },
      ],
      name: 'Publish to GitHub Release',
    });
  }
}

export class TagRelease extends ProjenRelease {
  public readonly trigger: ReleaseTrigger;
  public readonly publishTask: Task;
  constructor(scope: Construct, props: TagReleaseOptions) {
    super(scope, {
      ...props,
      githubRelease: false,
    });

    const project = Project.of(this);
    this.trigger = props.releaseTrigger ?? ReleaseTrigger.continuous();

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
      projectChangelogFile: this.trigger.changelogPath,
      gitBranch: props.branch,
      gitPushCommand: this.trigger.gitPushCommand,
    });

    const unbumpTask = project.tasks.tryFind('unbump');
    unbumpTask?.reset('echo "nothing to do"');

    const bumpTask = project.tasks.tryFind('bump');
    bumpTask?.prependExec(
      `mkdir -p ${this.artifactsDirectory} && cp ${props.versionFile} ${this.artifactsDirectory}/`,
    );
    project.addGitIgnore(this.artifactsDirectory);
    project.packageTask.spawn(
      project.addTask('dist', {
        steps: [
          { exec: `mkdir -p ${this.artifactsDirectory}` },
          { exec: `cp ${props.versionFile} ${this.artifactsDirectory}/` },
          { exec: `git checkout ${props.versionFile}` },
        ],
      }),
    );
    if (this.trigger.changelogPath) {
      this.publishTask.prependExec(
        `cp ${this.artifactsDirectory}/${props.versionFile} . && git add ${props.versionFile}`,
      );
    } else {
      this.publishTask.prependExec(
        `VERSION=$(cat ${this.artifactsDirectory}/version.txt); cp ${this.artifactsDirectory}/${props.versionFile} . && git add ${props.versionFile} && git commit -m "chore(release): v$VERSION"`,
      );
    }

    const checkout = WorkflowSteps.checkout({
      with: {
        ref: props.branch,
        token: props.githubReleaseToken ?? '${{ secrets.GITHUB_TOKEN }}',
      },
    });
    this.addJobs({
      release_git: {
        permissions: {
          contents: JobPermission.WRITE,
        },
        if: "needs.release.outputs.tag_exists != 'true' && needs.release.outputs.latest_commit == github.sha",
        name: 'Publish Git Tag',
        needs: ['release'],
        runsOn: ['ubuntu-latest'],
        steps: [
          checkout,
          WorkflowSteps.downloadArtifact({
            with: {
              name: 'build-artifact',
              path: this.artifactsDirectory,
            },
          }),
          {
            name: 'Restore build artifact permissions',
            run: `cd ${this.artifactsDirectory} && setfacl --restore=permissions-backup.acl`,
            continueOnError: true,
          },
          WorkflowSteps.setupGitIdentity({
            gitIdentity: props.gitIdentity ?? {
              email: 'github-actions@github.com',
              name: 'github-actions',
            },
          }),
          {
            name: 'Release',
            env: {
              VERSION_FILE: versionFile,
              CHANGELOG: this.trigger.changelogPath ?? '',
              RELEASE_TAG_FILE: releaseTagFile,
              GITHUB_TOKEN:
                props.githubReleaseToken ?? '${{ secrets.GITHUB_TOKEN }}',
            },
            run: project.runTaskCommand(this.publishTask),
          },
        ],
      },
    });
  }
}
