import * as path from 'path';
import { PrimitiveType, Property } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';

export const gitIdentity: Property = {
  name: 'gitIdentity',
  type: { fqn: 'projen.github.GitIdentity' },
  optional: true,
  docs: {
    default: 'github-actions user',
    summary:
      'The git identity to use when pushing the release commit and tag\n' +
      '   * Note: if you use the default github-actions user then the\n' +
      '   * Push/Tag will not trigger any other workflows',
  },
};

export function githubStructs(project: TypeScriptProject) {
  const root = 'src/structs/github-options';
  new TextFile(project, path.join(root, 'index.ts'), {
    lines: [
      "export * from './app-options';",
      "export * from './access-token-options';",
    ],
  });
  const pulumiEscSetup: Property = {
    name: 'pulumiEscSetup',
    type: { fqn: '@hallcor/pulumi-projen-project-types.PulumiEscSetup' },
    optional: true,
    docs: {
      summary:
        'Optionally include setup steps to inject environment variables from Pulumi ESC',
      default: 'do not include pulumi esc setup',
    },
  };
  new ProjenStruct(project, {
    name: 'GithubCredentialsAppOptions',
    filePath: path.join(root, 'app-options.ts'),
  })
    .mixin(Struct.fromFqn('projen.github.GithubCredentialsAppOptions'))
    .add(pulumiEscSetup)
    .replace('appIdSecret', {
      name: 'clientIdSecret',
      type: { primitive: PrimitiveType.String },
      optional: true,
      docs: {
        default: 'PROJEN_APP_CLIENT_ID',
        summary: 'The name of the secret that contains the app client id',
      },
    });

  new ProjenStruct(project, {
    name: 'GithubCredentialsPersonalAccessTokenOptions',
    filePath: path.join(root, 'access-token-options.ts'),
  })
    .mixin(
      Struct.fromFqn(
        'projen.github.GithubCredentialsPersonalAccessTokenOptions',
      ),
    )
    .add(pulumiEscSetup);
}
