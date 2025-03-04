import { YamlFile } from 'projen';
import { ReleaseWorkflow, TagRelease } from './release';
import { TypeScriptProject } from './typescript-base';
import { TypeScriptComponentOptions } from './typescript-options';

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
      githubReleaseToken: options.githubReleaseToken,
      gitIdentity: options.gitIdentity,
    });

    new ReleaseWorkflow(this, 'github-release');
  }
}
