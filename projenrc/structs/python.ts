import * as path from 'path';
import { PrimitiveType, Stability } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { gitIdentity } from './github';

export function pythonStructs(project: TypeScriptProject) {
  const root = 'src/structs/python-options';
  new TextFile(project, path.join(root, 'index.ts'), {
    lines: [
      "export * from './pulumi-options';",
      "export * from './component-options';",
    ],
  });
  const pulumiOptions = new ProjenStruct(project, {
    name: 'PulumiPythonOptions',
    filePath: path.join(root, 'pulumi-options.ts'),
  })
  .add({
    name: 'pulumiVersion',
    type: { primitive: PrimitiveType.String },
    optional: true,
    docs: {
      default: '>=3.153 <4.0',
      summary:
        'The pulumi version to use. The version range should be valid semver',
      see: 'https://www.npmjs.com/package/semver',
    },
  })
  .add({
    name: 'pluginOptions',
    type: { fqn: '@hallcor/pulumi-projen-project-types.PulumiPluginOptions'},
    optional: true,
    docs: {
      summary: 'Option for the PulumiPlugin.yaml file',
    }
  });

  new ProjenStruct(project, {
    name: 'PythonComponentOptions',
    filePath: path.join(root, 'component-options.ts'),
  })
    .mixin(Struct.fromFqn('projen.python.PythonProjectOptions'))
    .withoutDeprecated()
    .omit(
      'pip',
      'poetry',
      'venv',
      'venvOptions',
      'github',
      'poetryOptions',
      'setupConfig',
      'setupTools',
    )
    .add({
      name: 'buildWorkflowOptions',
      type: { fqn: 'projen.build.BuildWorkflowCommonOptions' },
      optional: true,
      docs: {
        summary: 'Options for the PR build workflow.',
      },
    })
    .add({
      name: 'release',
      type: { primitive: PrimitiveType.Boolean },
      optional: true,
      docs: {
        summary: 'Add release management to this project',
        default: 'true',
      },
    })
    .add(gitIdentity)
    .update('projenCredentials', {
      type: { fqn: '@hallcor/pulumi-projen-project-types.GithubCredentials' },
    })
    .add({ name: 'pulumiPythonOptions', type: pulumiOptions, optional: true })
    .add({
      name: 'releaseTrigger',
      type: {
        fqn: 'projen.release.ReleaseTrigger',
      },
      optional: true,
      docs: {
        default: 'Continuous releases (`ReleaseTrigger.continuous()`)',
        summary: 'The release trigger to use.',
        stability: Stability.Experimental,
      },
    });
}
