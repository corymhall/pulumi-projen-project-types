import {
  JobPermission,
  JobPermissions,
  JobStep,
} from 'projen/lib/github/workflows-model';

interface PulumiEscSetupOptions {
  readonly setupSteps: JobStep[];
  readonly keys?: string[];
  readonly permissions?: JobPermissions;
}

export interface PulumiEscActionOptions {
  /**
   * The ESC environment to open
   */
  readonly environment: string;

  /**
   * list of keys to inject into the current action/workflow environment.
   *
   * @default all keys from the environment will be injected
   */
  readonly keys?: string[];
}

// enum PulumiTokenType {
//   ORGANIZATION = 'urn:pulumi:token-type:access_token:organization',
//   TEAM = 'urn:pulumi:token-type:access_token:team',
//   PERSONAL = 'urn:pulumi:token-type:access_token:personal',
// }

export interface PulumiAuthOptions extends PulumiEscActionOptions {
  /**
   * The Pulumi organization to authenticate with
   */
  readonly organization: string;

  // TODO: can you use anything other than organization?
  // readonly requestedTokenType?: PulumiTokenType;
}

export interface PulumiEscPersonalAccessTokenOptions
  extends PulumiEscActionOptions {
  /**
   * The secret name for the access token
   */
  readonly secret?: string;
}

export class PulumiEscSetup {
  /**
   * Provides ESC access using a personal access token.
   *
   * The token must be added as a secret to the GitHub repo, and the name of the
   * secret can be specified here.
   *
   * @default - a secret named "PULUMI_ACCESS_TOKEN"
   */
  public static fromPersonalAccessToken(
    options: PulumiEscPersonalAccessTokenOptions,
  ) {
    const secret = options.secret ?? 'PULUMI_ACCESS_TOKEN';
    return new PulumiEscSetup({
      keys: options.keys,
      setupSteps: [
        {
          uses: 'pulumi/esc-action@v1',
          with: {
            environment: options.environment,
            keys: options.keys ? options.keys.join(',') : undefined,
          },
          env: {
            PULUMI_ACCESS_TOKEN: `\${{ secrets.${secret} }}`,
          },
        },
      ],
    });
  }

  /**
   * Provides ESC access using OIDC authentication via the pulumi/auth-actions
   * action.
   */
  public static fromOidcAuth(options: PulumiAuthOptions) {
    return new PulumiEscSetup({
      keys: options.keys,
      permissions: {
        idToken: JobPermission.WRITE,
      },
      setupSteps: [
        {
          with: {
            organization: options.organization,
            'requested-token-type':
              'urn:pulumi:token-type:access_token:organization',
          },
          uses: 'pulumi/auth-actions@v1',
        },
        {
          uses: 'pulumi/esc-action@v1',
          with: {
            environment: options.environment,
            keys: options.keys ? options.keys.join(',') : undefined,
          },
        },
      ],
    });
  }
  private constructor(private readonly options: PulumiEscSetupOptions) {}

  public get permissions(): JobPermissions | undefined {
    return this.options.permissions;
  }

  public get setupSteps() {
    return this.options.setupSteps;
  }

  public get keys(): string[] | undefined {
    return this.options.keys;
  }
}
