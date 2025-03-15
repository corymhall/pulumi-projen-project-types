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
        // `$(cat ${options.releasetagPath})`,
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

    // by default the unbump task resets the version to 0.0.0
    // but we don't want to do that since we are keeping the version
    // and that would cause a diff and fail the task
    // instead just checkout the previous version so diff won't fail
    const unbumpTask = project.tasks.tryFind('unbump');
    unbumpTask?.reset(`git checkout ${props.versionFile}`);

    project.addGitIgnore(this.artifactsDirectory);
    project.packageTask.spawn(
      project.addTask('dist', {
        steps: [
          { exec: `mkdir -p ${this.artifactsDirectory}` },
          { exec: `cp ${props.versionFile} ${this.artifactsDirectory}/` },
          { exec: `touch ${releaseTagFile}` }, // the check version workflow step requires this file
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
      check_tag: {
        permissions: {
          contents: JobPermission.WRITE,
        },
        if: "needs.release.outputs.tag_exists != 'true' && needs.release.outputs.latest_commit == github.sha",
        name: 'Check Tag',
        needs: ['release'],
        runsOn: ['ubuntu-latest'],
        outputs: {
          should_release: {
            outputName: 'should_release',
            stepId: 'tag-exists',
          },
        },
        steps: [
          downloadArtifact,
          restoreArtifact,
          {
            id: 'tag-exists',
            run: [
              'TAG=$(cat dist/releasetag.txt)',
              'if [ ! -z "$TAG" ]',
              'then',
              'echo "should_release=true" >> $GITHUB_OUTPUT',
              'else',
              'echo "should_release=false" >> $GITHUB_OUTPUT',
              'fi',
              'cat $GITHUB_OUTPUT',
            ].join('\n'),
          },
        ],
      },
    });

    this.addJobs({
      release_git: {
        permissions: {
          contents: JobPermission.WRITE,
          ...props.gitTagPublishOptions?.permissions,
        },
        if: "needs.release.outputs.tag_exists != 'true' && needs.release.outputs.latest_commit == github.sha && needs.check_tag.outputs.should_release == 'true'",
        name: 'Publish Git Tag',
        needs: ['release', 'check_tag'],
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
          needs: ['release_git', 'release', 'check_tag'],
          if: "needs.release.outputs.tag_exists != 'true' && needs.release.outputs.latest_commit == github.sha && needs.check_tag.outputs.should_release == 'true'",
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
