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

/**
 * Configuration for exporting environment variables from ESC.
 */
export class ExportEnvironmentVariables {
  private constructor(private readonly value: boolean | string[]) {}

  /**
   * Do not export environment variables. This is the default.
   */
  public static disabled(): ExportEnvironmentVariables {
    return new ExportEnvironmentVariables(false);
  }

  /**
   * Provide explicit mappings to export.
   *
   * Each entry should follow the ESC action mapping format, for example
   * `GITHUB_TOKEN=PULUMI_BOT_TOKEN` or `AWS_ACCESS_KEY_ID`.
   */
  public static fromMapping(mapping: string[]): ExportEnvironmentVariables {
    return new ExportEnvironmentVariables(mapping);
  }

  /**
   * @internal
   */
  public _render(): boolean | string {
    if (Array.isArray(this.value)) {
      return this.value.join('\n');
    }
    return this.value;
  }

  /**
   * @internal
   */
  public _usesMapping(): boolean {
    return Array.isArray(this.value);
  }
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
   * @deprecated use `exportEnvironmentVariables` instead
   */
  readonly keys?: string[];

  /**
   * Whether to export environment variables from ESC.
   *
   * Can also be an array of mapping strings to explicitly control which variables
   * are exported (joined with newlines for the action input).
   *
   * @default ExportEnvironmentVariables.disabled()
   */
  readonly exportEnvironmentVariables?: ExportEnvironmentVariables;

  /**
   * The Pulumi Cloud URL to target.
   *
   * @default - Use the default Pulumi Cloud URL
   */
  readonly cloudUrl?: string;
}

export enum PulumiTokenType {
  ORG = 'urn:pulumi:token-type:access_token:organization',
  TEAM = 'urn:pulumi:token-type:access_token:team',
  PERSONAL = 'urn:pulumi:token-type:access_token:personal',
}

export abstract class PulumiToken {
  /**
   * Note: organization tokens are only valid for enterprise organizations
   */
  public static fromOrgToken(scope?: string): PulumiToken {
    return {
      scope,
      tokenType: PulumiTokenType.ORG,
    };
  }

  /**
   * @param userName the username of the Pulumi user to request the user token. Defaults to the organization name
   */
  public static fromPersonalToken(userName?: string): PulumiToken {
    return {
      scope: `user:${userName ?? 'USER_NAME'}`,
      tokenType: PulumiTokenType.PERSONAL,
    };
  }

  public static fromTeamToken(teamName: string): PulumiToken {
    return {
      scope: `team:${teamName}`,
      tokenType: PulumiTokenType.TEAM,
    };
  }

  /**
   * The token scope. Scope is only optional for
   * organization tokens
   */
  public abstract scope?: string;
  public abstract tokenType: PulumiTokenType;
}

export interface PulumiAuthOptions extends PulumiEscActionOptions {
  /**
   * The Pulumi organization to authenticate with
   */
  readonly organization: string;

  /**
   * The type of pulumi token to get
   *
   *
   * @default PulumiToken.fromPersonalToken()
   */
  readonly requestedToken?: PulumiToken;
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
    if (options.keys && options.exportEnvironmentVariables) {
      throw new Error(
        'Do not provide both "keys" and "exportEnvironmentVariables". Specify only one.',
      );
    }
    const exportEnvironmentVariables =
      options.exportEnvironmentVariables ?? ExportEnvironmentVariables.disabled();

    let keys: string | undefined;
    let exportEnvironmentVariablesInput: boolean | string =
      exportEnvironmentVariables._render();

    if (options.keys) {
      keys = options.keys.join(',');
      exportEnvironmentVariablesInput = true;
    } else if (exportEnvironmentVariables._usesMapping()) {
      keys = undefined;
    }

    return new PulumiEscSetup({
      keys: options.keys,
      setupSteps: [
        {
          uses: 'pulumi/esc-action@v1',
          with: {
            environment: options.environment,
            keys,
            'export-environment-variables': exportEnvironmentVariablesInput,
            'cloud-url': options.cloudUrl,
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
    const token =
      options.requestedToken ??
      PulumiToken.fromPersonalToken(options.organization);
    const scope = token.scope
      ? token.scope.replace('USER_NAME', options.organization)
      : undefined;
    if (token.tokenType !== PulumiTokenType.ORG && !scope) {
      throw new Error(
        `PulumiTokenType ${token.tokenType} requires a "scope" to be set`,
      );
    }
    if (options.keys && options.exportEnvironmentVariables) {
      throw new Error(
        'Do not provide both "keys" and "exportEnvironmentVariables". Specify only one.',
      );
    }
    const exportEnvironmentVariables =
      options.exportEnvironmentVariables ?? ExportEnvironmentVariables.disabled();

    let keys: string | undefined;
    let exportEnvironmentVariablesInput: boolean | string =
      exportEnvironmentVariables._render();

    if (options.keys) {
      keys = options.keys.join(',');
      exportEnvironmentVariablesInput = true;
    } else if (exportEnvironmentVariables._usesMapping()) {
      keys = undefined;
    }

    return new PulumiEscSetup({
      keys: options.keys,
      permissions: {
        idToken: JobPermission.WRITE,
      },
      setupSteps: [
        {
          name: 'Generate Pulumi Access Token',
          id: 'generate_pulumi_token',
          with: {
            organization: options.organization,
            'requested-token-type': token.tokenType,
            scope: scope,
            'export-environment-variables': false,
          },
          uses: 'pulumi/auth-actions@v1',
        },
        {
          uses: 'pulumi/esc-action@v1',
          with: {
            environment: options.environment,
            keys,
            'export-environment-variables': exportEnvironmentVariablesInput,
            'cloud-url': options.cloudUrl,
          },
          env: {
            PULUMI_ACCESS_TOKEN:
              '${{ steps.generate_pulumi_token.outputs.pulumi-access-token }}',
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
