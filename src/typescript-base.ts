import { JsonPatch } from 'projen';
import { Transform } from 'projen/lib/javascript';
import {
  TypeScriptProject as ProjenTypeScriptProject,
  TypeScriptProjectOptions,
} from 'projen/lib/typescript';

export class TypeScriptProject extends ProjenTypeScriptProject {
  constructor(options: TypeScriptProjectOptions) {
    super({
      prettier: true,
      prettierOptions: {
        settings: {
          singleQuote: true,
        },
      },
      eslintOptions: {
        dirs: options.eslintOptions?.dirs ?? [options.srcdir ?? 'src'],
        prettier: options.prettier ?? true,
        ...options.eslintOptions,
      },
      packageManager: options.packageManager,
      jestOptions: {
        configFilePath: 'jest.config.json',
      },
      ...options,
    });

    const jestConfig = this.tryFindObjectFile('jest.config.json');
    jestConfig?.patch(
      JsonPatch.add('/transform', {
        '^.+\\.(t|j)sx?$': new Transform('@swc/jest'),
      }),
    );
    // const jestConfig = this.tryFindObjectFile('jest.config.json');
    // jestConfig?.patch(JsonPatch.remove('/preset'));
    // jestConfig?.patch(JsonPatch.remove('/globals'));

    this.addDevDeps('@swc/core', '@swc/jest');
  }
}
