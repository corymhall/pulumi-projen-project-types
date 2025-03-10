import { PrimitiveType, Property, Stability } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { cdk, JsonPatch } from 'projen';
import {
  NodePackageManager,
  NpmAccess,
  Transform,
  UpgradeDependenciesSchedule,
} from 'projen/lib/javascript';
const project = new cdk.JsiiProject({
  author: 'corymhall',
  authorAddress: '43035978+corymhall@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.7.0',
  name: '@hallcor/pulumi-projen-project-types',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/corymhall/pulumi-projen-project-types.git',
  deps: ['projen', 'constructs'],
  packageManager: NodePackageManager.NPM,
  devDeps: ['@mrgrain/jsii-struct-builder', '@swc/jest', '@swc/core'],
  peerDeps: ['constructs', 'projen'],
  prettier: true,
  githubOptions: {
    mergify: true,
    workflows: true,
  },
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },
  eslintOptions: {
    dirs: [],
    prettier: true,
  },
  depsUpgradeOptions: {
    workflowOptions: { schedule: UpgradeDependenciesSchedule.WEEKLY },
  },
  autoApproveOptions: {
    label: 'auto-approve',
    allowedUsernames: ['corymhall'],
  },
  jestOptions: {
    configFilePath: 'jest.config.json',
  },
  npmAccess: NpmAccess.PUBLIC,
  publishToPypi: {
    distName: 'hallcor.pulumi-projen-project-types',
    module: 'hallcor.pulumi_projen_project_types',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const gitIdentity: Property = {
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
new ProjenStruct(project, { name: 'TagReleaseOptions' })
  .mixin(Struct.fromFqn('projen.release.ReleaseOptions'))
  .omit('github')
  .add(gitIdentity);

const pulumiOptions = new ProjenStruct(project, {
  name: 'PulumiPythonOptions',
}).add({
  name: 'pulumiVersion',
  type: { primitive: PrimitiveType.String },
  optional: true,
  docs: {
    default: '>=3.153 <4.0',
    summary:
      'The pulumi version to use. The version range should be valid semver',
    see: 'https://www.npmjs.com/package/semver',
  },
});

const eslintOptions = new ProjenStruct(project, {
  name: 'EslintOptions',
  filePath: 'src/typescript-options/eslint-options.ts',
})
  .mixin(Struct.fromFqn('projen.javascript.EslintOptions'))
  .update('dirs', { docs: { default: 'src' } })
  .update('prettier', { docs: { default: 'true' } });

const prettierSettings = new ProjenStruct(project, {
  name: 'PrettierSettings',
  filePath: 'src/typescript-options/prettier-settings.ts',
})
  .mixin(Struct.fromFqn('projen.javascript.PrettierSettings'))
  .update('singleQuote', { docs: { default: 'true' } });

const prettierOptions = new ProjenStruct(project, {
  name: 'PrettierOptions',
  filePath: 'src/typescript-options/prettier-options.ts',
})
  .mixin(Struct.fromFqn('projen.javascript.PrettierOptions'))
  .update('settings', { type: prettierSettings });

const tsProps = new ProjenStruct(project, {
  name: 'TypeScriptProjectProps',
  filePath: 'src/typescript-options/project-props.ts',
})
  .mixin(Struct.fromFqn('projen.typescript.TypeScriptProjectOptions'))
  .withoutDeprecated()
  .update('eslintOptions', {
    type: eslintOptions,
  })
  .update('prettierOptions', {
    type: prettierOptions,
  })
  .update('prettier', { docs: { default: 'true' } });

new ProjenStruct(project, {
  name: 'TypeScriptComponentOptions',
  filePath: 'src/typescript-options/component-options.ts',
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

new ProjenStruct(project, { name: 'PythonComponentOptions' })
  .mixin(Struct.fromFqn('projen.python.PythonProjectOptions'))
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
  .add(gitIdentity)
  .add({ name: 'pulumiPythonOptions', type: pulumiOptions, optional: true })
  .add({
    name: 'componentName',
    type: {
      primitive: PrimitiveType.String,
    },
    optional: true,
    docs: {
      default: 'the project `name`',
      summary: 'The name of the pulumi component',
    },
  })
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

const eslint = project.tryFindObjectFile('.eslintrc.json');
// I don't want to show linting errors for things that get auto fixed
eslint?.addOverride('extends', ['plugin:import/typescript']);

const jestConfig = project.tryFindObjectFile('jest.config.json');
jestConfig?.patch(JsonPatch.remove('/preset'));
jestConfig?.patch(JsonPatch.remove('/globals'));
jestConfig?.patch(
  JsonPatch.add('/transform', {
    '^.+\\.(t|j)sx?$': new Transform('@swc/jest'),
  }),
);
project.synth();
