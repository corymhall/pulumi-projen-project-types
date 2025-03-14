import { JobPermissions, JobStep } from 'projen/lib/github/workflows-model';
import {
  GithubCredentialsAppOptions,
  GithubCredentialsPersonalAccessTokenOptions,
} from './structs';

interface GithubCredentialsOptions {
  readonly setupSteps: JobStep[];
  readonly tokenRef: string;
  readonly permissions?: JobPermissions;
}

/**
 * Represents a method of providing GitHub API access for projen workflows.
 */
export class GithubCredentials {
  /**
   * Provide API access through a GitHub personal access token.
   *
   * The token must be added as a secret to the GitHub repo, and the name of the
   * secret can be specified here.
   *
   * @see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
   * @default - a secret named "PROJEN_GITHUB_TOKEN"
   */
  public static fromPersonalAccessToken(
    options: GithubCredentialsPersonalAccessTokenOptions = {},
  ) {
    const prefix = options.pulumiEscSetup ? 'env' : 'secrets';
    return new GithubCredentials({
      setupSteps: options.pulumiEscSetup
        ? options.pulumiEscSetup.setupSteps
        : [],
      tokenRef: `\${{ ${prefix}.${options.secret ?? 'PROJEN_GITHUB_TOKEN'} }}`,
    });
  }

  /**
   * Provide API access through a GitHub App.
   *
   * The GitHub App must be installed on the GitHub repo, its App ID and a
   * private key must be added as secrets to the repo. The name of the secrets
   * can be specified here.
   *
   * @see https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app
   * @see https://projen.io/docs/integrations/github/#github-app
   * @default - app id stored in "PROJEN_APP_CLIENT_ID" and private key stored in "PROJEN_APP_PRIVATE_KEY" with all permissions attached to the app
   */
  public static fromApp(options: GithubCredentialsAppOptions = {}) {
    const clientIdSecret = options.clientIdSecret ?? 'PROJEN_APP_CLIENT_ID';
    const privateKeySecret =
      options.privateKeySecret ?? 'PROJEN_APP_PRIVATE_KEY';

    const setupSteps: JobStep[] = [];
    const prefix = options.pulumiEscSetup ? 'env' : 'secrets';
    if (options.pulumiEscSetup) {
      if (options.pulumiEscSetup.keys) {
        if (!options.pulumiEscSetup.keys.includes(clientIdSecret)) {
          throw new Error(
            `clientIdSecret was not included in pulumiEscSetup.keys`,
          );
        }
        if (!options.pulumiEscSetup.keys.includes(privateKeySecret)) {
          throw new Error(
            `privateKeySecret was not included in pulumiEscSetup.keys`,
          );
        }
      }
      setupSteps.push(...options.pulumiEscSetup.setupSteps);
    }

    return new GithubCredentials({
      permissions: options.pulumiEscSetup?.permissions,
      setupSteps: [
        ...setupSteps,
        {
          name: 'Generate token',
          id: 'generate_token',
          uses: 'actions/create-github-app-token@v1',
          with: {
            'app-id': `\${{ ${prefix}.${clientIdSecret} }}`, // can be client-id
            'private-key': `\${{ ${prefix}.${privateKeySecret} }}`,
          },
        },
      ],
      tokenRef: '${{ steps.generate_token.outputs.token }}',
    });
  }

  private constructor(private readonly options: GithubCredentialsOptions) {}

  /**
   * Setup steps to obtain GitHub credentials.
   */
  public get setupSteps(): JobStep[] {
    return [...this.options.setupSteps];
  }

  public get permissions(): JobPermissions | undefined {
    return this.options.permissions;
  }

  /**
   * The value to use in a workflow when a GitHub token is expected. This
   * typically looks like "${{ some.path.to.a.value }}".
   */
  public get tokenRef(): string {
    return this.options.tokenRef;
  }
}
