import { Property } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { gitIdentity } from './github';

export const gitTagPublishOptions: Property = {
  name: 'gitTagPublishOptions',
  type: {
    fqn: '@hallcor/pulumi-projen-project-types.GitTagPublishOptions',
  },
  optional: true,
  docs: {
    summary: 'Additional workflow options for the git tag job',
  },
};

export function releaseStructs(project: TypeScriptProject) {
  new TextFile(project, 'src/structs/release-options/index.ts', {
    lines: ["export * from './tag-release-options';"],
  });
  new ProjenStruct(project, {
    name: 'TagReleaseOptions',
    filePath: 'src/structs/release-options/tag-release-options.ts',
  })
    .mixin(Struct.fromFqn('projen.release.ReleaseOptions'))
    .omit('github')
    .add(gitTagPublishOptions)
    .add(gitIdentity);
}
