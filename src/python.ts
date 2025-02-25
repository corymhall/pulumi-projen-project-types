import { JsonFile, Project, SampleDir, SampleFile, YamlFile } from 'projen';
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
    this.addDependency('pulumi');

    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'python',
      },
    });

    const componentName = options.componentName ?? this.moduleName;

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
        'import json',
        '',
        'with open(".version.json", "r") as f:',
        '    pyproject = json.load(f)',
        'version = pyproject["version"]',
        '',
        'if __name__ == "__main__":',
        '# Call the component provider host. This will discover any ComponentResource',
        '# subclasses in this package, infer their schema and host a provider that',
        '# allows constructing these components from a Pulumi program.',
        `component_provider_host(Metadata("${componentName}", version))`,
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

    new JsonFile(this, '.version.json', {
      marker: false,
      readonly: false,
      obj: {
        version: '0.0.0',
      },
    });

    const tagRelease = new TagRelease(this, {
      artifactsDirectory: 'dist',
      branch: 'main',
      task: this.packageTask,
      versionFile: '.version.json',
      releaseTrigger: options.releaseTrigger,
    });

    const project = Project.of(this);
    const bumpTask = project.tasks.tryFind('bump');
    bumpTask?.prependExec(
      `mkdir -p ${tagRelease.artifactsDirectory} && cp .version.json ${tagRelease.artifactsDirectory}/`,
    );
    project.addGitIgnore(tagRelease.artifactsDirectory);
    project.packageTask.spawn(
      project.addTask('dist', {
        steps: [
          { exec: `mkdir -p ${tagRelease.artifactsDirectory}` },
          { exec: `cp .version.json ${tagRelease.artifactsDirectory}/` },
          { exec: `git checkout .version.json` },
        ],
      }),
    );
    tagRelease.publishTask.prependExec(
      `cp ${tagRelease.artifactsDirectory}/.version.json . && git add .version.json`,
    );

    new ReleaseWorkflow(this, 'release-workflow');
  }
}
