import { PrimitiveType, Stability } from '@jsii/spec';
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
    workflowOptions: {
      labels: ['auto-approve'],
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
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

new ProjenStruct(project, { name: 'TagReleaseOptions' })
  .mixin(Struct.fromFqn('projen.release.ReleaseOptions'))
  .omit('github')
  .add({
    name: 'bumpFile',
    type: {
      primitive: PrimitiveType.String,
    },
    optional: true,
    docs: {
      default: 'package.json',
      summary:
        'The file to bump the version in. Must be a commit-and-tag-version compatible bump file',
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
