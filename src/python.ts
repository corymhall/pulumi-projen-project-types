import { SampleDir, SampleFile, YamlFile } from 'projen';
import { BuildWorkflow } from 'projen/lib/build';
import { AutoMerge, GithubCredentials } from 'projen/lib/github';
import { PythonProject } from 'projen/lib/python';
import { TagRelease } from './release';
import { PythonComponentOptions } from './structs';

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
    // hack to workaround https://github.com/projen/projen/issues/2475
    const initOptions = options as any;
    if ('__new__' in initOptions) {
      initOptions.__new__.args.devDeps = [
        'hallcor.pulumi-projen-project-types',
      ];
    }
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
      options.pulumiPythonOptions?.pulumiVersion ?? '>=3.153 <4.0';
    this.addDependency(`pulumi@${pulumiVersion}`);

    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'python',
      },
    });

    const componentName = options.componentName ?? this.name;

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

    new SampleFile(this, 'version.json', {
      contents: JSON.stringify(
        {
          version: '0.0.0',
        },
        undefined,
        2,
      ),
    });

    const versionFilePath = 'version.json';

    new SampleFile(this, '__main__.py', {
      contents: [
        'from pulumi.provider.experimental import component_provider_host, Metadata',
        'import os',
        'import json',
        '',
        'dir = os.path.dirname(os.path.abspath(__file__))',
        `version_file_path = os.path.join(dir, "${versionFilePath}")`,
        'with open(version_file_path, "r") as f:',
        '    pyproject = json.load(f)',
        'version = pyproject["version"]',
        '',
        'if __name__ == "__main__":',
        '    # Call the component provider host. This will discover any ComponentResource',
        '    # subclasses in this package, infer their schema and host a provider that',
        '    # allows constructing these components from a Pulumi program.',
        `    component_provider_host(Metadata("${componentName}", version))`,
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
      buildTask: this.buildTask,
      artifactsDirectory: 'dist',
      preBuildSteps: [
        {
          name: 'Setup Python',
          uses: 'actions/setup-python@v5',
        },
        { run: 'python -m venv venv' },
        { run: this.github.project.runTaskCommand(installTask) },
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
        this.autoMerge.addConditions('status-success=pull-request-lint');
      }
      this.autoMerge.addConditionsLater({
        render: () =>
          this.buildWorkflow?.buildJobIds.map((id) => `status-success=${id}`) ??
          [],
      });
    }

    if (options.release ?? true) {
      new TagRelease(this, {
        artifactsDirectory: 'dist',
        branch: 'main',
        task: this.packageTask,
        versionFile: versionFilePath,
        releaseTrigger: options.releaseTrigger,
        gitIdentity: options.gitIdentity,
        gitTagPublishOptions: {
          permissions: projenCredentials?.permissions,
        },
      });
    }
  }
}
