import { SampleDir, YamlFile } from 'projen';
import { TypeScriptComponentOptions } from './structs';
import { TypeScriptProject } from './typescript-base';

export class TypeScriptComponent extends TypeScriptProject {
  private readonly componentName: string;
  constructor(options: TypeScriptComponentOptions) {
    super({
      ...options,
      entrypoint: options.entrypoint ?? 'src/index.ts',
      package: false,
      sampleCode: false,
      buildWorkflowOptions: {
        preBuildSteps: [
          ...(options.buildWorkflowOptions?.preBuildSteps ?? []),
          {
            uses: 'pulumi/actions@v6',
            with: {
              'pulumi-version': 'latest',
            },
          },
        ],
      },
    });

    this.addDeps('@pulumi/pulumi');
    new YamlFile(this, 'PulumiPlugin.yaml', {
      obj: {
        runtime: 'nodejs',
      },
    });

    this.postCompileTask.spawn(
      this.addTask('get-schema', {
        description: 'Validate schema is valid',
        exec: 'pulumi package get-schema ./ > /dev/null',
      }),
    );

    const matches = this.package.packageName.match(/(@.*?\/)?(.+)/);
    if (!matches) {
      this.componentName = this.package.packageName;
    } else {
      this.componentName = matches[2];
      // TODO: do something with namespace?
      // let namespace = undefined;
      // if (matches[1]) {
      //   namespace = matches[1].substring(1, matches[1].length - 1);
      // }
    }

    if (options.sampleCode ?? true) {
      new SampleDir(this, 'src', {
        files: {
          'index.ts': [
            "import * as path from 'path';",
            '// export your components here',
            "export * from './example-component';",
          ].join('\n'),
          'example-component.ts': [
            "import * as pulumi from '@pulumi/pulumi';",
            '',
            '/**',
            ' * Input arguments to the component',
            ' */',
            'export interface ExampleComponentArgs {',
            '  // Component inputs...',
            '}',
            '',
            '/**',
            ' * An example component',
            ' */',
            'export class ExampleComponent extends pulumi.ComponentResource {',
            '  // Component outputs',
            '  // public readonly roleArn: pulumi.Output<string>;',
            '',
            '  constructor(',
            '    name: string,',
            '    args: ExampleComponentArgs,',
            '    opts?: pulumi.ComponentResourceOptions,',
            '  ) {',
            '    // type has the format of ${package}:index:${className}',
            '    // where package needs to match the `name` in your package.json',
            '    // and className needs to match the name of this class',
            `    super('${this.componentName}:index:ExampleComponent', name, args, opts);`,
            '',
            '    // Component resources go here...',
            '    //',
            '    // e.g.',
            '    //',
            '    // const role = new aws.iam.Role(',
            '    //   `${name}-policy`,',
            '    //   {',
            '    //     assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal(',
            '    //       aws.iam.Principals.LambdaPrincipal,',
            '    //     ),',
            '    //   },',
            '    //   { parent: this },',
            '    // );',
            '',
            '    // register any of the component outputs here as well',
            '    this.registerOutputs({',
            '      // e.g.',
            '      // roleArn: role.arn,',
            '    });',
            '  }',
            '}\n',
          ].join('\n'),
        },
      });
    }
  }
}
