import { JsonPatch } from 'projen';
import { Transform } from 'projen/lib/javascript';
import { TypeScriptProject as ProjenTypeScriptProject } from 'projen/lib/typescript';
import { TypeScriptProjectProps } from './typescript-options';

export class TypeScriptProject extends ProjenTypeScriptProject {
  constructor(options: TypeScriptProjectProps) {
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

    this.addDevDeps('@swc/core', '@swc/jest');
  }
}
