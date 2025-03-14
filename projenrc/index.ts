import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { githubStructs, gitIdentity } from './structs/github';
import { pythonStructs } from './structs/python';
import { typescriptStructs } from './structs/typescript';

export function addTypes(project: TypeScriptProject): void {
  new TextFile(project, 'src/structs/index.ts', {
    lines: [
      "export * from './tag-release-options';",
      "export * from './typescript-options';",
      "export * from './github-options';",
      "export * from './python-options';",
    ],
  });
  new ProjenStruct(project, {
    name: 'TagReleaseOptions',
    filePath: 'src/structs/tag-release-options.ts',
  })
    .mixin(Struct.fromFqn('projen.release.ReleaseOptions'))
    .omit('github')
    .add(gitIdentity);

  typescriptStructs(project);
  pythonStructs(project);
  githubStructs(project);
}
