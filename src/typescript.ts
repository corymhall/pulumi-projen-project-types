import { YamlFile } from 'projen';
import { setWorkflowPermissions } from './internal/jsii-project';
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

    setWorkflowPermissions(this, projenCredentials);

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
