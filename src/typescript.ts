import { YamlFile } from 'projen';
import { TagRelease } from './release';
import { TypeScriptComponentOptions } from './structs';
import { TypeScriptProject } from './typescript-base';

export class TypeScriptComponent extends TypeScriptProject {
  constructor(options: TypeScriptComponentOptions) {
    const projenCredentials = options.projenCredentials;
    super({
      ...options,
      release: false,
      entrypoint: options.entrypoint ?? 'src/index.ts',
      package: false,
    });

    this.addDeps('@pulumi/pulumi');
    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'nodejs',
      },
    });

    if (projenCredentials?.permissions) {
      const upgradeWorkflows = this.upgradeWorkflow?.workflows;
      upgradeWorkflows?.forEach((workflow) => {
        const pr = workflow.getJob('pr');
        workflow.updateJob('pr', {
          ...pr,
          permissions: {
            ...pr.permissions,
            ...projenCredentials?.permissions,
          },
        });
      });
      if (this.buildWorkflow && this.github) {
        const buildName = this.buildWorkflow.name;
        const buildWorkflow = this.github.tryFindWorkflow(buildName);
        if (!buildWorkflow) {
          throw new Error(`could not find build workflow ${buildName}`);
        }
        const mutationJob = buildWorkflow.getJob('self-mutation');
        buildWorkflow?.updateJob('self-mutation', {
          ...mutationJob,
          permissions: {
            ...mutationJob.permissions,
            ...projenCredentials.permissions,
          },
        });
      }
    }

    const versionFile = this.package.file.path;
    const permissions = projenCredentials?.permissions;

    new TagRelease(this, {
      ...options,
      artifactsDirectory: this.artifactsDirectory,
      branch: options.defaultReleaseBranch ?? 'main',
      gitTagPublishOptions: {
        permissions,
      },
      versionFile,
      task: this.packageTask,
      releaseTrigger: options.releaseTrigger,
      gitIdentity: options.gitIdentity,
    });
  }
}
