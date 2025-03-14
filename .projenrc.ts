import { cdk, JsonPatch } from 'projen';
import {
  NodePackageManager,
  NpmAccess,
  Transform,
  UpgradeDependenciesSchedule,
} from 'projen/lib/javascript';
import { addTypes } from './projenrc';
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

addTypes(project);

const eslint = project.tryFindObjectFile('.eslintrc.json');
// I don't want to show linting errors for things that get auto fixed
eslint?.addOverride('extends', ['plugin:import/typescript']);
eslint?.addToArray('overrides.0.files', 'projenrc/**/*.ts');

const jestConfig = project.tryFindObjectFile('jest.config.json');
jestConfig?.patch(JsonPatch.remove('/preset'));
jestConfig?.patch(JsonPatch.remove('/globals'));
jestConfig?.patch(
  JsonPatch.add('/transform', {
    '^.+\\.(t|j)sx?$': new Transform('@swc/jest'),
  }),
);
project.synth();
