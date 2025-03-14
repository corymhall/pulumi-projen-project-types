import { YamlFile } from 'projen';
import { TagRelease } from './release';
import { TypeScriptComponentOptions } from './structs';
import { TypeScriptProject } from './typescript-base';

export class TypeScriptComponent extends TypeScriptProject {
  constructor(options: TypeScriptComponentOptions) {
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

    const versionFile = this.package.file.path;

    new TagRelease(this, {
      ...options,
      artifactsDirectory: this.artifactsDirectory,
      branch: options.defaultReleaseBranch ?? 'main',
      versionFile,
      task: this.packageTask,
      releaseTrigger: options.releaseTrigger,
      gitIdentity: options.gitIdentity,
    });
  }
}
