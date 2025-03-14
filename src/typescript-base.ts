import { JsonPatch } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { JobPermissions } from 'projen/lib/github/workflows-model';
import { Transform } from 'projen/lib/javascript';
import { TypeScriptProject as ProjenTypeScriptProject } from 'projen/lib/typescript';
import { TypeScriptProjectProps } from './structs';

export class TypeScriptProject extends ProjenTypeScriptProject {
  constructor(options: TypeScriptProjectProps) {
    let githubCredentials: GithubCredentials | undefined;
    let permissions: JobPermissions | undefined;
    if (options.projenCredentials) {
      if (options.projenCredentials.permissions) {
        permissions = options.projenCredentials.permissions;
      }
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
      buildWorkflowOptions:
        permissions || options.buildWorkflowOptions
          ? {
              ...options.buildWorkflowOptions,
              permissions: {
                ...options.buildWorkflowOptions?.permissions,
                ...permissions,
              },
            }
          : undefined,
      projenCredentials: githubCredentials,
      depsUpgradeOptions:
        permissions || options.depsUpgradeOptions
          ? {
              workflowOptions: {
                ...options.depsUpgradeOptions?.workflowOptions,
                permissions: {
                  ...options.depsUpgradeOptions?.workflowOptions,
                  ...permissions,
                },
              },
            }
          : undefined,
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
