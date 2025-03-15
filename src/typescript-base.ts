import { JsonPatch } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { Transform } from 'projen/lib/javascript';
import { TypeScriptProject as ProjenTypeScriptProject } from 'projen/lib/typescript';
import { TypeScriptProjectProps } from './structs';
import { setWorkflowPermissions } from './internal/jsii-project';

export class TypeScriptProject extends ProjenTypeScriptProject {
  constructor(options: TypeScriptProjectProps) {
    const projenCredentials = options.projenCredentials;
    let githubCredentials: GithubCredentials | undefined;
    if (options.projenCredentials) {
      const creds = GithubCredentials.fromPersonalAccessToken();
      (creds as any).options.setupSteps = options.projenCredentials.setupSteps;
      (creds as any).options.tokenRef = options.projenCredentials.tokenRef;
      githubCredentials = creds;
    }
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
      projenCredentials: githubCredentials,
    });

    setWorkflowPermissions(this, projenCredentials);

    const jestConfig = this.tryFindObjectFile('jest.config.json');
    jestConfig?.patch(
      JsonPatch.add('/transform', {
        '^.+\\.(t|j)sx?$': new Transform('@swc/jest'),
      }),
    );

    this.addDevDeps('@swc/core', '@swc/jest');
  }
}
