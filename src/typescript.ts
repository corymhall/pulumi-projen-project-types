import { YamlFile } from 'projen';
import { TypeScriptProjectOptions } from 'projen/lib/typescript';
import { TypeScriptProject } from './typescript-base';

export class TypeScriptComponent extends TypeScriptProject {
  constructor(options: TypeScriptProjectOptions) {
    super({
      ...options,
      entrypoint: 'src/index.ts',
    });

    this.addDeps('@pulumi/pulumi');
    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'nodejs',
      },
    });
  }
}
