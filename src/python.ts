import { statSync } from 'fs';
import { join } from 'path';
import { SampleDir, SampleFile, YamlFile } from 'projen';
import { BuildWorkflow } from 'projen/lib/build';
import { AutoMerge, GithubCredentials } from 'projen/lib/github';
import { PythonProject } from 'projen/lib/python';
import { Release } from 'projen/lib/release';
import { toPythonVersionRange } from 'projen/lib/util/semver';
import { PythonComponentOptions } from './structs';

// devDeps and __news__.args.devDeps will always be the same
// projen doesn't let you override
//
// hack to workaround https://github.com/projen/projen/issues/2475
function handleDevDeps(options: PythonComponentOptions): any {
  const initOptions = options as any;
  if ('__new__' in initOptions) {
    const newDevDeps: string[] = initOptions.__new__.args.devDeps;
    const newDeps: string[] = initOptions.__new__.args.deps;
    if (
      !newDevDeps ||
      newDevDeps.length !== 1 ||
      !newDevDeps[0].match(/(@hallcor\/pulumi-projen-project-types)@?(.*)?/)
    ) {
      throw new Error(
        'Something went wrong, devDeps should have only one entry for @hallcor/pulumi-projen-project-types',
      );
    }
    const matches = newDevDeps[0].match(
      /(@hallcor\/pulumi-projen-project-types)@?(.*)?/,
    )!;
    const version = matches[2];
    if (version) {
      if (version.startsWith('file:')) {
        if (
          !newDeps ||
          newDeps.length === 0 ||
          !newDeps.find((d) => d.includes('hallcor'))
        ) {
          throw new Error(
            'If you are using `projen new` pointing to a local version of @hallcor/pulumi-projen-project-types, ' +
              'you must add the location of the local .whl file to the `--deps` command line argument.\n' +
              'For example:\n' +
              'npx projen new --from @hallcor/pulumi-projen-project-types@file:../path/to/local/project --deps "../path/to/local/project/dist/hallcor_pulumi_projen_project_types-0.0.0-py3-none-any.whl"\n',
          );
        }
        const dep = newDeps.find((d) => d.includes('hallcor'))!;
        const cwd = process.cwd();
        try {
          statSync(join(cwd, dep));
        } catch (e: any) {
          if (e.code === 'ENOENT') {
            throw new Error(
              `The file provided in '--deps ${newDeps[0]}' does not exist. Please make sure the path is correct.`,
            );
          }
          throw e;
        }
        initOptions.devDeps = [dep];
        initOptions.__new__.args.devDeps = initOptions.devDeps;
        initOptions.deps = newDeps.filter((d) => d !== dep);
        initOptions.__new__.args.deps = initOptions.deps;
        return initOptions;
      } else {
        const range = toPythonVersionRange(version);
        initOptions.devDeps = [`hallcor.pulumi-projen-project-types${range}`];
        initOptions.__new__.args.devDeps = initOptions.devDeps;
        return initOptions;
      }
    }
    initOptions.devDeps = [`hallcor.pulumi-projen-project-types`];
    initOptions.__new__.args.devDeps = initOptions.devDeps;
    return initOptions;
  }
  // otherwise this isn't an `projen new` operation and just return the option values
  return options;
}

export class PythonComponent extends PythonProject {
  /**
   * The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.
   */
  public readonly buildWorkflow?: BuildWorkflow;

  /**
   * Component that sets up mergify for merging approved pull requests.
   */
  public readonly autoMerge?: AutoMerge;

  constructor(options: PythonComponentOptions) {
    const initOptions = handleDevDeps(options);
    const projenCredentials = options.projenCredentials;
    let githubCredentials: GithubCredentials | undefined;
    if (options.projenCredentials) {
      const creds = GithubCredentials.fromPersonalAccessToken();
      (creds as any).options.setupSteps = options.projenCredentials.setupSteps;
      (creds as any).options.tokenRef = options.projenCredentials.tokenRef;
      githubCredentials = creds;
    }
    super({
      ...initOptions,
      pip: true,
      github: true,
      poetry: false,
      venv: true,
      sample: false,
      venvOptions: {
        envdir: 'venv',
      },
      projenCredentials: githubCredentials,
    });
    const pulumiVersion =
      options.pulumiPythonOptions?.pulumiVersion ?? '>=3.159 <4.0';
    this.addDependency(`pulumi@${pulumiVersion}`);

    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'python',
      },
    });

    const componentName = options.componentName ?? this.name;

    this.postCompileTask.spawn(
      this.addTask('get-schema', {
        description: 'Validate schema is valid',
        exec: 'pulumi package get-schema ./ > /dev/null',
      }),
    );

    if (options.sample ?? true) {
      new SampleDir(this, 'tests', {
        files: {
          '__init__.py': '',
          'example_test.py': [
            'def test_example():',
            '    assert True == True',
          ].join('\n'),
        },
      });

      new SampleDir(this, this.moduleName, {
        files: {
          '__init__.py': '',
          'example_component.py': [
            'import pulumi',
            'from typing import Optional, TypedDict',
            '',
            '',
            'class ExampleComponentArgs(TypedDict):',
            '    requiredArgument: str',
            '    """A required string argument"""',

            '    optionalArgument: Optional[str]',
            '    """An optional string argument"""',
            '',
            '',
            'class ExampleComponent(pulumi.ComponentResource):',
            '    exampleOutput: pulumi.Output[str]',
            '    """An example output value"""',
            '',
            '    def __init__(',
            '        self,',
            '        name: str,',
            '        args: ExampleComponentArgs,',
            '        opts: Optional[pulumi.ResourceOptions] = None,',
            '    ) -> None:',
            `        super().__init__("${componentName}:index:ExampleComponent", name, {}, opts)`,
            '        # Component code goes here',
            '        #',
            '        #',
            '        self.register_outputs(',
            '            {',
            '                "exampleOutput": "",  # output values',
            '            }',
            '        )',
            '',
          ].join('\n'),
        },
      });
    }

    const artifactsDirectory = 'dist';
    const versionFilePath = join(artifactsDirectory, 'version.json');

    new SampleFile(this, '__main__.py', {
      contents: [
        'from pulumi.provider.experimental import component_provider_host',
        `from ${this.moduleName}.example_component import ExampleComponent`,
        '',
        'if __name__ == "__main__":',
        '    # Call the component provider host. This will discover any ComponentResource',
        '    # subclasses in this package, infer their schema and host a provider that',
        '    # allows constructing these components from a Pulumi program.',
        '    component_provider_host(',
        `        name="${componentName}",`,
        '        # List your components here that you want to export',
        '        components=[',
        '            ExampleComponent,',
        '        ],',
        '    )',
      ].join('\n'),
    });

    const github = this.github;
    if (!github) {
      throw new Error('This project must be a github project');
    }
    const installTask = this.tasks.tryFind('install');
    if (!installTask) {
      throw new Error('install task not found');
    }

    this.buildWorkflow = new BuildWorkflow(this, {
      ...options.buildWorkflowOptions,
      buildTask: this.buildTask,
      artifactsDirectory: 'dist',
      preBuildSteps: [
        ...(options.buildWorkflowOptions?.preBuildSteps ?? []),
        {
          name: 'Setup Python',
          uses: 'actions/setup-python@v5',
        },
        { run: 'python -m venv venv' },
        { run: this.github.project.runTaskCommand(installTask) },
        {
          uses: 'pulumi/actions@v6',
          with: {
            'pulumi-version': 'latest',
          },
        },
      ],
    });

    const buildName = this.buildWorkflow.name;
    const buildWorkflow = this.github.tryFindWorkflow(buildName);
    if (!buildWorkflow) {
      throw new Error(`could not find build workflow ${buildName}`);
    }
    const mutationJob = buildWorkflow.getJob('self-mutation');
    buildWorkflow?.updateJob('self-mutation', {
      ...mutationJob,
      permissions: {
        ...mutationJob.permissions,
        ...projenCredentials?.permissions,
      },
    });

    if ((options.autoMerge ?? true) && this.github?.mergify) {
      this.autoMerge = new AutoMerge(this.github, options.autoMergeOptions);
      if (options.githubOptions?.pullRequestLint ?? true) {
        this.autoMerge.addConditions('status-success=Validate PR title');
      }
      this.autoMerge.addConditionsLater({
        render: () =>
          this.buildWorkflow?.buildJobIds.map((id) => `status-success=${id}`) ??
          [],
      });
    }

    if (options.release ?? true) {
      new Release(this, {
        artifactsDirectory,
        branch: 'main',
        task: this.packageTask,
        versionFile: versionFilePath,
        releaseTrigger: options.releaseTrigger,
      });
    }
  }
}
