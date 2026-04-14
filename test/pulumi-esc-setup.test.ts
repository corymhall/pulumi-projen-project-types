import {
  ExportEnvironmentVariables,
  PulumiEscSetup,
} from '../src/pulumi-esc-setup';

describe('PulumiEscSetup', () => {
  test('renders mapped exports as a comma-delimited esc-action input for PAT auth', () => {
    const esc = PulumiEscSetup.fromPersonalAccessToken({
      environment: 'acme/catalog/prod',
      exportEnvironmentVariables: ExportEnvironmentVariables.fromMapping([
        'AWS_ACCESS_KEY_ID',
        'CD_TOKEN=DEPLOY_TOKEN',
        '*',
      ]),
    });

    expect(esc.setupSteps).toHaveLength(1);
    expect(esc.setupSteps[0]?.with).toMatchObject({
      'export-environment-variables':
        'AWS_ACCESS_KEY_ID,CD_TOKEN=DEPLOY_TOKEN,*',
      environment: 'acme/catalog/prod',
      keys: undefined,
    });
  });

  test('renders mapped exports as a comma-delimited esc-action input for OIDC auth', () => {
    const esc = PulumiEscSetup.fromOidcAuth({
      environment: 'acme/catalog/prod',
      organization: 'acme',
      exportEnvironmentVariables: ExportEnvironmentVariables.fromMapping([
        'AWS_ACCESS_KEY_ID',
        'CD_TOKEN=DEPLOY_TOKEN',
      ]),
    });

    expect(esc.setupSteps).toHaveLength(1);
    expect(esc.setupSteps[0]?.with).toMatchObject({
      'export-environment-variables':
        'AWS_ACCESS_KEY_ID,CD_TOKEN=DEPLOY_TOKEN',
      environment: 'acme/catalog/prod',
      keys: undefined,
      'oidc-auth': true,
      'oidc-organization': 'acme',
    });
  });
});
