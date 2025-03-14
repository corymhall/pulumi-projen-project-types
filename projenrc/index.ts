import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { githubStructs } from './structs/github';
import { pythonStructs } from './structs/python';
import { releaseStructs } from './structs/release';
import { typescriptStructs } from './structs/typescript';

export function addTypes(project: TypeScriptProject): void {
  new TextFile(project, 'src/structs/index.ts', {
    lines: [
      "export * from './release-options';",
      "export * from './typescript-options';",
      "export * from './github-options';",
      "export * from './python-options';",
      "export * from './release-options';",
    ],
  });

  releaseStructs(project);
  typescriptStructs(project);
  pythonStructs(project);
  githubStructs(project);
}
