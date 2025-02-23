import { DependencyType, SampleDir, SampleFile, TomlFile, YamlFile } from 'projen';
import { BuildWorkflow } from 'projen/lib/build';
import { JobStep } from 'projen/lib/github/workflows-model';
import { PythonProject } from 'projen/lib/python';
import { PythonComponentOptions } from './PythonComponentOptions';
import { TagRelease, ReleaseWorkflow } from './release';


export class PythonComponent extends PythonProject {
  constructor(options: PythonComponentOptions) {
    super({
      ...options,
      pip: true,
      github: true,
      poetry: false,
      venv: true,
      sample: false,
      venvOptions: {
        envdir: 'venv',
      },
    });
    this.deps.addDependency('pulumi', DependencyType.RUNTIME);

    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'python',
      },
    });

    const componentName = options.componentName ?? this.moduleName;

    new TomlFile(this, 'pyproject.toml', {
      obj: {
        project: {
          name: this.moduleName,
          version: '0.0.0',
        },
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

    new SampleFile(this, '__main__.py', {
      contents: [
        'from pulumi.provider.experimental import component_provider_host, Metadata',
        'import importlib.metadata',
        '',
        'if __name__ == "__main__":',
        '# Call the component provider host. This will discover any ComponentResource',
        '# subclasses in this package, infer their schema and host a provider that',
        '# allows constructing these components from a Pulumi program.',
        `component_provider_host(Metadata("${componentName}", importlib.metadata.version("${this.moduleName}")))`,
      ].join('\n'),
    });

    const setupStep: JobStep = {
      name: 'Setup Python',
      uses: 'actions/setup-python@v5',
    };

    new BuildWorkflow(this, {
      buildTask: this.buildTask,
      artifactsDirectory: 'dist',
      preBuildSteps: [setupStep],
    });

    new TagRelease(this, {
      artifactsDirectory: 'dist',
      branch: 'main',
      task: this.packageTask,
      versionFile: 'pyproject.toml',
    });

    new ReleaseWorkflow(this, 'release-workflow');
  }
}
