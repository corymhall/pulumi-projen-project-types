import * as path from 'path';
import { PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { gitIdentity } from './github';

export function typescriptStructs(project: TypeScriptProject) {
  const root = 'src/structs/typescript-options';
  new TextFile(project, path.join(root, 'index.ts'), {
    lines: [
      "export * from './eslint-options';",
      "export * from './prettier-options';",
      "export * from './prettier-settings';",
      "export * from './project-props';",
      "export * from './component-options';",
    ],
  });
  const eslintOptions = new ProjenStruct(project, {
    name: 'EslintOptions',
    filePath: path.join(root, 'eslint-options.ts'),
  })
    .mixin(Struct.fromFqn('projen.javascript.EslintOptions'))
    .update('dirs', { docs: { default: 'src' } })
    .update('prettier', { docs: { default: 'true' } });

  const prettierSettings = new ProjenStruct(project, {
    name: 'PrettierSettings',
    filePath: path.join(root, 'prettier-settings.ts'),
  })
    .mixin(Struct.fromFqn('projen.javascript.PrettierSettings'))
    .update('singleQuote', { docs: { default: 'true' } });

  const prettierOptions = new ProjenStruct(project, {
    name: 'PrettierOptions',
    filePath: path.join(root, 'prettier-options.ts'),
  })
    .mixin(Struct.fromFqn('projen.javascript.PrettierOptions'))
    .update('settings', { type: prettierSettings });

  const tsProps = new ProjenStruct(project, {
    name: 'TypeScriptProjectProps',
    filePath: path.join(root, 'project-props.ts'),
  })
    .mixin(Struct.fromFqn('projen.typescript.TypeScriptProjectOptions'))
    .withoutDeprecated()
    .update('projenCredentials', {
      type: { fqn: '@hallcor/pulumi-projen-project-types.GithubCredentials' },
    })
    .update('eslintOptions', {
      type: eslintOptions,
    })
    .update('prettierOptions', {
      type: prettierOptions,
    })
    .update('prettier', { docs: { default: 'true' } });

  new ProjenStruct(project, {
    name: 'TypeScriptComponentOptions',
    filePath: path.join(root, 'component-options.ts'),
  })
    .mixin(tsProps)
    .omit(
      'package',
      'release',
      'releaseToNpm',
      'package',
      'github',
      'jsiiReleaseVersion',
      'npmDistTag',
      'releaseBranches',
    )
    .update('entrypoint', {
      docs: {
        default: 'src/index.ts',
      },
    })
    .add(gitIdentity)
    .add({
      name: 'componentName',
      type: {
        primitive: PrimitiveType.String,
      },
      optional: true,
      docs: {
        default: 'the `moduleName`',
        summary: 'The name of the pulumi component',
      },
    });
}
