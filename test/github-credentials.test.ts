import {
  GithubCredentials,
  PulumiEscSetup,
  PulumiToken,
} from '../src';

describe('GithubCredentials', () => {
  test('fromApp uses ESC step outputs when pulumiEscSetup is provided', () => {
    const esc = PulumiEscSetup.fromOidcAuth({
      environment: 'imports/github-secrets',
      organization: 'pulumi',
      requestedToken: PulumiToken.fromOrgToken(),
    });

    const credentials = GithubCredentials.fromApp({
      pulumiEscSetup: esc,
    });

    expect(credentials.setupSteps).toHaveLength(2);
    expect(credentials.setupSteps[1]).toMatchObject({
      id: 'generate_token',
      uses: 'actions/create-github-app-token@v1',
      with: {
        'app-id': '${{ steps.esc.outputs.PROJEN_APP_CLIENT_ID }}',
        'private-key': '${{ steps.esc.outputs.PROJEN_APP_PRIVATE_KEY }}',
      },
    });
  });

  test('fromApp still uses repository secrets when pulumiEscSetup is not provided', () => {
    const credentials = GithubCredentials.fromApp();

    expect(credentials.setupSteps).toHaveLength(1);
    expect(credentials.setupSteps[0]).toMatchObject({
      id: 'generate_token',
      uses: 'actions/create-github-app-token@v1',
      with: {
        'app-id': '${{ secrets.PROJEN_APP_CLIENT_ID }}',
        'private-key': '${{ secrets.PROJEN_APP_PRIVATE_KEY }}',
      },
    });
  });
});
