import { JsonPatch } from 'projen';
import {
  NodePackageManager,
  Transform,
  UpgradeDependenciesSchedule,
} from 'projen/lib/javascript';
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
        dirs: [],
        prettier: true,
      },
      packageManager: NodePackageManager.NPM,
      depsUpgradeOptions: {
        workflowOptions: {
          labels: ['auto-approve'],
          schedule: UpgradeDependenciesSchedule.WEEKLY,
        },
      },
      jestOptions: {
        configFilePath: 'jest.config.json',
      },
      ...options,
    });
    const eslint = this.tryFindObjectFile('.eslintrc.json');
    // I don't want to show linting errors for things that get auto fixed
    eslint?.addOverride('extends', ['plugin:import/typescript']);

    const jestConfig = this.tryFindObjectFile('jest.config.json');
    jestConfig?.patch(JsonPatch.remove('/preset'));
    jestConfig?.patch(JsonPatch.remove('/globals'));
    jestConfig?.patch(
      JsonPatch.add('/transform', {
        '^.+\\.(t|j)sx?$': new Transform('@swc/jest'),
      }),
    );

    this.addDevDeps('@swc/core', '@swc/jest');
  }
}
