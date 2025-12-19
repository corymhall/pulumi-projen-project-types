import * as path from 'path';
import { Construct } from 'constructs';
import { Project, Task } from 'projen';
import { GitHub, WorkflowSteps } from 'projen/lib/github';
import { DEFAULT_GITHUB_ACTIONS_USER } from 'projen/lib/github/constants';

import {
  JobPermission,
  JobPermissions,
  JobStep,
} from 'projen/lib/github/workflows-model';
import { Release as ProjenRelease, ReleaseTrigger } from 'projen/lib/release';
import { TagReleaseOptions } from './structs';

export interface GitTagPublishOptions {
  /**
   * Additional permissions to add to the Git Tag Job
   */
  readonly permissions?: JobPermissions;
}

export interface CreateReleaseOptions {
  /**
   * The path to the changelog file to generate release notes from
   */
  readonly changelogPath: string;

  /**
   * The name of the release tag. This could be something like `${{ github.ref_name }}`
   * or `$(cat dist/releasetag.txt)`
   */
  readonly releaseTag: string;

  /**
   * Whether to only run this step if the `release-exists` step returned true
   * @default false
   */
  readonly verifyReleaseExists?: boolean;
}

export class ReleaseWorkflow extends Construct {
  public static releaseExists(): JobStep {
    return {
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
    };
  }
  public static createRelease(options: CreateReleaseOptions): JobStep {
    return {
      name: 'Create Release',
      if: options.verifyReleaseExists
        ? '!fromJSON(steps.release-exists.outputs.result)'
        : undefined,
      run: [
        'gh release create',
        options.releaseTag,
        '--repo ${{ github.repository }}',
        `--notes-file ${options.changelogPath}`,
        `--title ${options.releaseTag}`,
        '--verify-tag',
      ].join(' '),
      env: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
      },
    };
  }
  constructor(scope: Construct, id: string, changelogPath: string) {
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
        WorkflowSteps.checkout({ with: { fetchDepth: 0 } }),
        ReleaseWorkflow.releaseExists(),
        ReleaseWorkflow.createRelease({
          changelogPath,
          releaseTag: '${{ github.ref_name }}',
          verifyReleaseExists: true,
        }),
      ],
      name: 'Publish to GitHub Release',
    });
  }
}

export class TagRelease extends ProjenRelease {
  public readonly trigger: ReleaseTrigger;
  public readonly publishTask: Task;
  constructor(scope: Construct, props: TagReleaseOptions) {
    if (!props.task) {
      throw new Error('TagRelease requires a release task');
    }
    super(scope, {
      ...props,
      task: props.task,
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

    project.addGitIgnore(this.artifactsDirectory);
    const github = GitHub.of(project);
    if (!github) {
      throw new Error('ReleaseWorkflow requires a GitHub Project');
    }

    const downloadArtifact = WorkflowSteps.downloadArtifact({
      with: {
        name: 'build-artifact',
        path: this.artifactsDirectory,
      },
    });
    const restoreArtifact = {
      name: 'Restore build artifact permissions',
      run: `cd ${this.artifactsDirectory} && setfacl --restore=permissions-backup.acl`,
      continueOnError: true,
    };

    this.addJobs({
      release_git: {
        permissions: {
          contents: JobPermission.WRITE,
          ...props.gitTagPublishOptions?.permissions,
        },
        if: "needs.release.outputs.tag_exists != 'true' && needs.release.outputs.latest_commit == github.sha",
        name: 'Publish Git Tag',
        needs: ['release'],
        runsOn: ['ubuntu-latest'],
        steps: [
          ...github.projenCredentials.setupSteps,
          WorkflowSteps.checkout({
            with: {
              ref: props.branch,
              token: github.projenCredentials.tokenRef,
            },
          }),
          downloadArtifact,
          restoreArtifact,
          WorkflowSteps.setupGitIdentity({
            gitIdentity: props.gitIdentity ?? DEFAULT_GITHUB_ACTIONS_USER,
          }),
          {
            name: 'Release',
            env: {
              VERSION_FILE: versionFile,
              CHANGELOG: this.trigger.changelogPath ?? '',
              RELEASE_TAG_FILE: releaseTagFile,
              GITHUB_TOKEN: github.projenCredentials.tokenRef,
            },
            run: project.runTaskCommand(this.publishTask),
          },
        ],
      },
    });

    if (!this.trigger.isManual) {
      this.addJobs({
        release_github: {
          permissions: {
            contents: JobPermission.WRITE,
          },
          needs: ['release_git', 'release'],
          if: "needs.release.outputs.tag_exists != 'true' && needs.release.outputs.latest_commit == github.sha",
          name: 'Publish GitHub Release',
          runsOn: ['ubuntu-latest'],
          steps: [
            downloadArtifact,
            restoreArtifact,
            ReleaseWorkflow.createRelease({
              changelogPath: changelogFile,
              releaseTag: `$(cat ${releaseTagFile})`,
            }),
          ],
        },
      });
    } else {
      if (this.trigger.changelogPath) {
        new ReleaseWorkflow(this, 'release-github', this.trigger.changelogPath);
      } else {
        this.project.logger.warn(
          'manual release trigger has no changelogPath, not generating release-github workflow',
        );
      }
    }
  }
}
