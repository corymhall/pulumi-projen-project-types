# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PythonComponent <a name="PythonComponent" id="@hallcor/pulumi-projen-project-types.PythonComponent"></a>

#### Initializers <a name="Initializers" id="@hallcor/pulumi-projen-project-types.PythonComponent.Initializer"></a>

```typescript
import { PythonComponent } from '@hallcor/pulumi-projen-project-types'

new PythonComponent(options: PythonComponentOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.Initializer.parameter.options">options</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions">PythonComponentOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.PythonComponent.Initializer.parameter.options"></a>

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions">PythonComponentOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `toString` <a name="toString" id="@hallcor/pulumi-projen-project-types.PythonComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@hallcor/pulumi-projen-project-types.PythonComponent.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@hallcor/pulumi-projen-project-types.PythonComponent.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@hallcor/pulumi-projen-project-types.PythonComponent.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@hallcor/pulumi-projen-project-types.PythonComponent.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@hallcor/pulumi-projen-project-types.PythonComponent.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@hallcor/pulumi-projen-project-types.PythonComponent.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.PythonComponent.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@hallcor/pulumi-projen-project-types.PythonComponent.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@hallcor/pulumi-projen-project-types.PythonComponent.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@hallcor/pulumi-projen-project-types.PythonComponent.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@hallcor/pulumi-projen-project-types.PythonComponent.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@hallcor/pulumi-projen-project-types.PythonComponent.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@hallcor/pulumi-projen-project-types.PythonComponent.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@hallcor/pulumi-projen-project-types.PythonComponent.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.PythonComponent.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@hallcor/pulumi-projen-project-types.PythonComponent.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@hallcor/pulumi-projen-project-types.PythonComponent.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@hallcor/pulumi-projen-project-types.PythonComponent.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.PythonComponent.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="@hallcor/pulumi-projen-project-types.PythonComponent.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@hallcor/pulumi-projen-project-types.PythonComponent.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="@hallcor/pulumi-projen-project-types.PythonComponent.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@hallcor/pulumi-projen-project-types.PythonComponent.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@hallcor/pulumi-projen-project-types.PythonComponent.isConstruct"></a>

```typescript
import { PythonComponent } from '@hallcor/pulumi-projen-project-types'

PythonComponent.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.PythonComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@hallcor/pulumi-projen-project-types.PythonComponent.isProject"></a>

```typescript
import { PythonComponent } from '@hallcor/pulumi-projen-project-types'

PythonComponent.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.PythonComponent.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@hallcor/pulumi-projen-project-types.PythonComponent.of"></a>

```typescript
import { PythonComponent } from '@hallcor/pulumi-projen-project-types'

PythonComponent.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@hallcor/pulumi-projen-project-types.PythonComponent.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.sampleTestdir">sampleTestdir</a></code> | <code>string</code> | Directory where sample tests are located. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `sampleTestdir`<sup>Required</sup> <a name="sampleTestdir" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.sampleTestdir"></a>

```typescript
public readonly sampleTestdir: string;
```

- *Type:* string
- *Default:* "tests"

Directory where sample tests are located.

---

##### `version`<sup>Required</sup> <a name="version" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponent.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@hallcor/pulumi-projen-project-types.PythonComponent.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### ReleaseWorkflow <a name="ReleaseWorkflow" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow"></a>

#### Initializers <a name="Initializers" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer"></a>

```typescript
import { ReleaseWorkflow } from '@hallcor/pulumi-projen-project-types'

new ReleaseWorkflow(scope: Construct, id: string, changelogPath: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.changelogPath">changelogPath</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `changelogPath`<sup>Required</sup> <a name="changelogPath" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.changelogPath"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.createRelease">createRelease</a></code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.releaseExists">releaseExists</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.isConstruct"></a>

```typescript
import { ReleaseWorkflow } from '@hallcor/pulumi-projen-project-types'

ReleaseWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `createRelease` <a name="createRelease" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.createRelease"></a>

```typescript
import { ReleaseWorkflow } from '@hallcor/pulumi-projen-project-types'

ReleaseWorkflow.createRelease(options: CreateReleaseOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.createRelease.parameter.options"></a>

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.CreateReleaseOptions">CreateReleaseOptions</a>

---

##### `releaseExists` <a name="releaseExists" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.releaseExists"></a>

```typescript
import { ReleaseWorkflow } from '@hallcor/pulumi-projen-project-types'

ReleaseWorkflow.releaseExists()
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### TagRelease <a name="TagRelease" id="@hallcor/pulumi-projen-project-types.TagRelease"></a>

#### Initializers <a name="Initializers" id="@hallcor/pulumi-projen-project-types.TagRelease.Initializer"></a>

```typescript
import { TagRelease } from '@hallcor/pulumi-projen-project-types'

new TagRelease(scope: Construct, props: TagReleaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.Initializer.parameter.props">props</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions">TagReleaseOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@hallcor/pulumi-projen-project-types.TagRelease.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `props`<sup>Required</sup> <a name="props" id="@hallcor/pulumi-projen-project-types.TagRelease.Initializer.parameter.props"></a>

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions">TagReleaseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.addBranch">addBranch</a></code> | Adds a release branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.addJobs">addJobs</a></code> | Adds jobs to all release workflows. |

---

##### `toString` <a name="toString" id="@hallcor/pulumi-projen-project-types.TagRelease.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@hallcor/pulumi-projen-project-types.TagRelease.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@hallcor/pulumi-projen-project-types.TagRelease.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@hallcor/pulumi-projen-project-types.TagRelease.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addBranch` <a name="addBranch" id="@hallcor/pulumi-projen-project-types.TagRelease.addBranch"></a>

```typescript
public addBranch(branch: string, options: BranchOptions): void
```

Adds a release branch.

It is a git branch from which releases are published. If a project has more than one release
branch, we require that `majorVersion` is also specified for the primary branch in order to
ensure branches always release the correct version.

###### `branch`<sup>Required</sup> <a name="branch" id="@hallcor/pulumi-projen-project-types.TagRelease.addBranch.parameter.branch"></a>

- *Type:* string

The branch to monitor (e.g. `main`, `v2.x`).

---

###### `options`<sup>Required</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.TagRelease.addBranch.parameter.options"></a>

- *Type:* projen.release.BranchOptions

Branch definition.

---

##### `addJobs` <a name="addJobs" id="@hallcor/pulumi-projen-project-types.TagRelease.addJobs"></a>

```typescript
public addJobs(jobs: {[ key: string ]: Job}): void
```

Adds jobs to all release workflows.

###### `jobs`<sup>Required</sup> <a name="jobs" id="@hallcor/pulumi-projen-project-types.TagRelease.addJobs.parameter.jobs"></a>

- *Type:* {[ key: string ]: projen.github.workflows.Job}

The jobs to add (name => job).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.of">of</a></code> | Returns the `Release` component of a project or `undefined` if the project does not have a Release component. |

---

##### `isConstruct` <a name="isConstruct" id="@hallcor/pulumi-projen-project-types.TagRelease.isConstruct"></a>

```typescript
import { TagRelease } from '@hallcor/pulumi-projen-project-types'

TagRelease.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.TagRelease.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@hallcor/pulumi-projen-project-types.TagRelease.isComponent"></a>

```typescript
import { TagRelease } from '@hallcor/pulumi-projen-project-types'

TagRelease.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.TagRelease.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@hallcor/pulumi-projen-project-types.TagRelease.of"></a>

```typescript
import { TagRelease } from '@hallcor/pulumi-projen-project-types'

TagRelease.of(project: Project)
```

Returns the `Release` component of a project or `undefined` if the project does not have a Release component.

###### `project`<sup>Required</sup> <a name="project" id="@hallcor/pulumi-projen-project-types.TagRelease.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | Location of build artifacts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.branches">branches</a></code> | <code>string[]</code> | Retrieve all release branch names. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.publishTask">publishTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.trigger">trigger</a></code> | <code>projen.release.ReleaseTrigger</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@hallcor/pulumi-projen-project-types.TagRelease.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@hallcor/pulumi-projen-project-types.TagRelease.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@hallcor/pulumi-projen-project-types.TagRelease.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

Location of build artifacts.

---

##### `branches`<sup>Required</sup> <a name="branches" id="@hallcor/pulumi-projen-project-types.TagRelease.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

Retrieve all release branch names.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@hallcor/pulumi-projen-project-types.TagRelease.property.publisher"></a>

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

---

##### `publishTask`<sup>Required</sup> <a name="publishTask" id="@hallcor/pulumi-projen-project-types.TagRelease.property.publishTask"></a>

```typescript
public readonly publishTask: Task;
```

- *Type:* projen.Task

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@hallcor/pulumi-projen-project-types.TagRelease.property.trigger"></a>

```typescript
public readonly trigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagRelease.property.ANTI_TAMPER_CMD">ANTI_TAMPER_CMD</a></code> | <code>string</code> | *No description.* |

---

##### `ANTI_TAMPER_CMD`<sup>Required</sup> <a name="ANTI_TAMPER_CMD" id="@hallcor/pulumi-projen-project-types.TagRelease.property.ANTI_TAMPER_CMD"></a>

```typescript
public readonly ANTI_TAMPER_CMD: string;
```

- *Type:* string

---

### TypeScriptComponent <a name="TypeScriptComponent" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent"></a>

#### Initializers <a name="Initializers" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.Initializer"></a>

```typescript
import { TypeScriptComponent } from '@hallcor/pulumi-projen-project-types'

new TypeScriptComponent(options: TypeScriptComponentOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.Initializer.parameter.options">options</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions">TypeScriptComponentOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.Initializer.parameter.options"></a>

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions">TypeScriptComponentOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.isConstruct"></a>

```typescript
import { TypeScriptComponent } from '@hallcor/pulumi-projen-project-types'

TypeScriptComponent.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.isProject"></a>

```typescript
import { TypeScriptComponent } from '@hallcor/pulumi-projen-project-types'

TypeScriptComponent.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.of"></a>

```typescript
import { TypeScriptComponent } from '@hallcor/pulumi-projen-project-types'

TypeScriptComponent.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@hallcor/pulumi-projen-project-types.TypeScriptComponent.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### TypeScriptProject <a name="TypeScriptProject" id="@hallcor/pulumi-projen-project-types.TypeScriptProject"></a>

#### Initializers <a name="Initializers" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.Initializer"></a>

```typescript
import { TypeScriptProject } from '@hallcor/pulumi-projen-project-types'

new TypeScriptProject(options: TypeScriptProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps">TypeScriptProjectProps</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps">TypeScriptProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.isConstruct"></a>

```typescript
import { TypeScriptProject } from '@hallcor/pulumi-projen-project-types'

TypeScriptProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.isProject"></a>

```typescript
import { TypeScriptProject } from '@hallcor/pulumi-projen-project-types'

TypeScriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.of"></a>

```typescript
import { TypeScriptProject } from '@hallcor/pulumi-projen-project-types'

TypeScriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CreateReleaseOptions <a name="CreateReleaseOptions" id="@hallcor/pulumi-projen-project-types.CreateReleaseOptions"></a>

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.CreateReleaseOptions.Initializer"></a>

```typescript
import { CreateReleaseOptions } from '@hallcor/pulumi-projen-project-types'

const createReleaseOptions: CreateReleaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.CreateReleaseOptions.property.changelogPath">changelogPath</a></code> | <code>string</code> | The path to the changelog file to generate release notes from. |
| <code><a href="#@hallcor/pulumi-projen-project-types.CreateReleaseOptions.property.releaseTag">releaseTag</a></code> | <code>string</code> | The name of the release tag. |
| <code><a href="#@hallcor/pulumi-projen-project-types.CreateReleaseOptions.property.verifyReleaseExists">verifyReleaseExists</a></code> | <code>boolean</code> | Whether to only run this step if the `release-exists` step returned true. |

---

##### `changelogPath`<sup>Required</sup> <a name="changelogPath" id="@hallcor/pulumi-projen-project-types.CreateReleaseOptions.property.changelogPath"></a>

```typescript
public readonly changelogPath: string;
```

- *Type:* string

The path to the changelog file to generate release notes from.

---

##### `releaseTag`<sup>Required</sup> <a name="releaseTag" id="@hallcor/pulumi-projen-project-types.CreateReleaseOptions.property.releaseTag"></a>

```typescript
public readonly releaseTag: string;
```

- *Type:* string

The name of the release tag.

This could be something like `${{ github.ref_name }}`
or `$(cat dist/releasetag.txt)`

---

##### `verifyReleaseExists`<sup>Optional</sup> <a name="verifyReleaseExists" id="@hallcor/pulumi-projen-project-types.CreateReleaseOptions.property.verifyReleaseExists"></a>

```typescript
public readonly verifyReleaseExists: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to only run this step if the `release-exists` step returned true.

---

### EslintOptions <a name="EslintOptions" id="@hallcor/pulumi-projen-project-types.EslintOptions"></a>

EslintOptions.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.EslintOptions.Initializer"></a>

```typescript
import { EslintOptions } from '@hallcor/pulumi-projen-project-types'

const eslintOptions: EslintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.dirs">dirs</a></code> | <code>string[]</code> | Files or glob patterns or directories with source files to lint (e.g. [ "src" ]). |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.aliasExtensions">aliasExtensions</a></code> | <code>string[]</code> | Enable import alias for module paths. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.aliasMap">aliasMap</a></code> | <code>{[ key: string ]: string}</code> | Enable import alias for module paths. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.commandOptions">commandOptions</a></code> | <code>projen.javascript.EslintCommandOptions</code> | Options for eslint command executed by eslint task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.devdirs">devdirs</a></code> | <code>string[]</code> | Files or glob patterns or directories with source files that include tests and build tools. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.fileExtensions">fileExtensions</a></code> | <code>string[]</code> | File types that should be linted (e.g. [ ".js", ".ts" ]). |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | List of file patterns that should not be linted, using the same syntax as .gitignore patterns. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.lintProjenRc">lintProjenRc</a></code> | <code>boolean</code> | Should we lint .projenrc.js. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.lintProjenRcFile">lintProjenRcFile</a></code> | <code>string</code> | Projenrc file to lint. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Enable prettier for code formatting. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.sortExtends">sortExtends</a></code> | <code>projen.ICompareString</code> | The extends array in eslint is order dependent. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.tsAlwaysTryTypes">tsAlwaysTryTypes</a></code> | <code>boolean</code> | Always try to resolve types under `<root>@types` directory even it doesn't contain any source code. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to `tsconfig.json` which should be used by eslint. |
| <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions.property.yaml">yaml</a></code> | <code>boolean</code> | Write eslint configuration as YAML instead of JSON. |

---

##### `dirs`<sup>Required</sup> <a name="dirs" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.dirs"></a>

```typescript
public readonly dirs: string[];
```

- *Type:* string[]
- *Default:* src

Files or glob patterns or directories with source files to lint (e.g. [ "src" ]).

---

##### `aliasExtensions`<sup>Optional</sup> <a name="aliasExtensions" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.aliasExtensions"></a>

```typescript
public readonly aliasExtensions: string[];
```

- *Type:* string[]
- *Default:* undefined

Enable import alias for module paths.

---

##### `aliasMap`<sup>Optional</sup> <a name="aliasMap" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.aliasMap"></a>

```typescript
public readonly aliasMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* undefined

Enable import alias for module paths.

---

##### `commandOptions`<sup>Optional</sup> <a name="commandOptions" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.commandOptions"></a>

```typescript
public readonly commandOptions: EslintCommandOptions;
```

- *Type:* projen.javascript.EslintCommandOptions

Options for eslint command executed by eslint task.

---

##### `devdirs`<sup>Optional</sup> <a name="devdirs" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.devdirs"></a>

```typescript
public readonly devdirs: string[];
```

- *Type:* string[]
- *Default:* []

Files or glob patterns or directories with source files that include tests and build tools.

These sources are linted but may also import packages from `devDependencies`.

---

##### `fileExtensions`<sup>Optional</sup> <a name="fileExtensions" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.fileExtensions"></a>

```typescript
public readonly fileExtensions: string[];
```

- *Type:* string[]
- *Default:* [".ts"]

File types that should be linted (e.g. [ ".js", ".ts" ]).

---

##### `ignorePatterns`<sup>Optional</sup> <a name="ignorePatterns" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]
- *Default:* [ '*.js', '*.d.ts', 'node_modules/', '*.generated.ts', 'coverage' ]

List of file patterns that should not be linted, using the same syntax as .gitignore patterns.

---

##### ~~`lintProjenRc`~~<sup>Optional</sup> <a name="lintProjenRc" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.lintProjenRc"></a>

- *Deprecated:* set to `false` to remove any automatic rules and add manually

```typescript
public readonly lintProjenRc: boolean;
```

- *Type:* boolean
- *Default:* true

Should we lint .projenrc.js.

---

##### ~~`lintProjenRcFile`~~<sup>Optional</sup> <a name="lintProjenRcFile" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.lintProjenRcFile"></a>

- *Deprecated:* provide as `devdirs`

```typescript
public readonly lintProjenRcFile: string;
```

- *Type:* string
- *Default:* "projenrc.js"

Projenrc file to lint.

Use empty string to disable.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* true

Enable prettier for code formatting.

---

##### `sortExtends`<sup>Optional</sup> <a name="sortExtends" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.sortExtends"></a>

```typescript
public readonly sortExtends: ICompareString;
```

- *Type:* projen.ICompareString
- *Default:* Use known ESLint best practices to place "prettier" plugins at the end of the array

The extends array in eslint is order dependent.

This option allows to sort the extends array in any way seen fit.

---

##### `tsAlwaysTryTypes`<sup>Optional</sup> <a name="tsAlwaysTryTypes" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.tsAlwaysTryTypes"></a>

```typescript
public readonly tsAlwaysTryTypes: boolean;
```

- *Type:* boolean
- *Default:* true

Always try to resolve types under `<root>@types` directory even it doesn't contain any source code.

This prevents `import/no-unresolved` eslint errors when importing a `@types/*` module that would otherwise remain unresolved.

---

##### `tsconfigPath`<sup>Optional</sup> <a name="tsconfigPath" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string
- *Default:* "./tsconfig.json"

Path to `tsconfig.json` which should be used by eslint.

---

##### `yaml`<sup>Optional</sup> <a name="yaml" id="@hallcor/pulumi-projen-project-types.EslintOptions.property.yaml"></a>

```typescript
public readonly yaml: boolean;
```

- *Type:* boolean
- *Default:* false

Write eslint configuration as YAML instead of JSON.

---

### PrettierOptions <a name="PrettierOptions" id="@hallcor/pulumi-projen-project-types.PrettierOptions"></a>

PrettierOptions.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.PrettierOptions.Initializer"></a>

```typescript
import { PrettierOptions } from '@hallcor/pulumi-projen-project-types'

const prettierOptions: PrettierOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions.property.ignoreFile">ignoreFile</a></code> | <code>boolean</code> | Defines an .prettierIgnore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions.property.ignoreFileOptions">ignoreFileOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .prettierignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions.property.overrides">overrides</a></code> | <code>projen.javascript.PrettierOverride[]</code> | Provide a list of patterns to override prettier configuration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions.property.settings">settings</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings">PrettierSettings</a></code> | Prettier settings. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions.property.yaml">yaml</a></code> | <code>boolean</code> | Write prettier configuration as YAML instead of JSON. |

---

##### `ignoreFile`<sup>Optional</sup> <a name="ignoreFile" id="@hallcor/pulumi-projen-project-types.PrettierOptions.property.ignoreFile"></a>

```typescript
public readonly ignoreFile: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .prettierIgnore file.

---

##### `ignoreFileOptions`<sup>Optional</sup> <a name="ignoreFileOptions" id="@hallcor/pulumi-projen-project-types.PrettierOptions.property.ignoreFileOptions"></a>

```typescript
public readonly ignoreFileOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .prettierignore file.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@hallcor/pulumi-projen-project-types.PrettierOptions.property.overrides"></a>

```typescript
public readonly overrides: PrettierOverride[];
```

- *Type:* projen.javascript.PrettierOverride[]
- *Default:* []

Provide a list of patterns to override prettier configuration.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@hallcor/pulumi-projen-project-types.PrettierOptions.property.settings"></a>

```typescript
public readonly settings: PrettierSettings;
```

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.PrettierSettings">PrettierSettings</a>
- *Default:* default settings

Prettier settings.

---

##### `yaml`<sup>Optional</sup> <a name="yaml" id="@hallcor/pulumi-projen-project-types.PrettierOptions.property.yaml"></a>

```typescript
public readonly yaml: boolean;
```

- *Type:* boolean
- *Default:* false

Write prettier configuration as YAML instead of JSON.

---

### PrettierSettings <a name="PrettierSettings" id="@hallcor/pulumi-projen-project-types.PrettierSettings"></a>

PrettierSettings.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.PrettierSettings.Initializer"></a>

```typescript
import { PrettierSettings } from '@hallcor/pulumi-projen-project-types'

const prettierSettings: PrettierSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.arrowParens">arrowParens</a></code> | <code>projen.javascript.ArrowParens</code> | Include parentheses around a sole arrow function parameter. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.bracketSameLine">bracketSameLine</a></code> | <code>boolean</code> | Put > of opening tags on the last line instead of on a new line. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.bracketSpacing">bracketSpacing</a></code> | <code>boolean</code> | Print spaces between brackets. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.cursorOffset">cursorOffset</a></code> | <code>number</code> | Print (to stderr) where a cursor at the given position would move to after formatting. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.embeddedLanguageFormatting">embeddedLanguageFormatting</a></code> | <code>projen.javascript.EmbeddedLanguageFormatting</code> | Control how Prettier formats quoted code embedded in the file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.endOfLine">endOfLine</a></code> | <code>projen.javascript.EndOfLine</code> | Which end of line characters to apply. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.filepath">filepath</a></code> | <code>string</code> | Specify the input filepath. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.htmlWhitespaceSensitivity">htmlWhitespaceSensitivity</a></code> | <code>projen.javascript.HTMLWhitespaceSensitivity</code> | How to handle whitespaces in HTML. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.insertPragma">insertPragma</a></code> | <code>boolean</code> | Insert. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.jsxSingleQuote">jsxSingleQuote</a></code> | <code>boolean</code> | Use single quotes in JSX. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.parser">parser</a></code> | <code>string</code> | Which parser to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.plugins">plugins</a></code> | <code>string[]</code> | Add a plugin. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.pluginSearchDirs">pluginSearchDirs</a></code> | <code>string[]</code> | Custom directory that contains prettier plugins in node_modules subdirectory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.printWidth">printWidth</a></code> | <code>number</code> | The line length where Prettier will try wrap. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.proseWrap">proseWrap</a></code> | <code>projen.javascript.ProseWrap</code> | How to wrap prose. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.quoteProps">quoteProps</a></code> | <code>projen.javascript.QuoteProps</code> | Change when properties in objects are quoted. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | Format code ending at a given character offset (exclusive). |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.rangeStart">rangeStart</a></code> | <code>number</code> | Format code starting at a given character offset. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.requirePragma">requirePragma</a></code> | <code>boolean</code> | Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.semi">semi</a></code> | <code>boolean</code> | Print semicolons. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.singleQuote">singleQuote</a></code> | <code>boolean</code> | Use single quotes instead of double quotes. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.tabWidth">tabWidth</a></code> | <code>number</code> | Number of spaces per indentation level. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.trailingComma">trailingComma</a></code> | <code>projen.javascript.TrailingComma</code> | Print trailing commas wherever possible when multi-line. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.useTabs">useTabs</a></code> | <code>boolean</code> | Indent with tabs instead of spaces. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PrettierSettings.property.vueIndentScriptAndStyle">vueIndentScriptAndStyle</a></code> | <code>boolean</code> | Indent script and style tags in Vue files. |

---

##### `arrowParens`<sup>Optional</sup> <a name="arrowParens" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.arrowParens"></a>

```typescript
public readonly arrowParens: ArrowParens;
```

- *Type:* projen.javascript.ArrowParens
- *Default:* ArrowParens.ALWAYS

Include parentheses around a sole arrow function parameter.

---

##### `bracketSameLine`<sup>Optional</sup> <a name="bracketSameLine" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.bracketSameLine"></a>

```typescript
public readonly bracketSameLine: boolean;
```

- *Type:* boolean
- *Default:* false

Put > of opening tags on the last line instead of on a new line.

---

##### `bracketSpacing`<sup>Optional</sup> <a name="bracketSpacing" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.bracketSpacing"></a>

```typescript
public readonly bracketSpacing: boolean;
```

- *Type:* boolean
- *Default:* true

Print spaces between brackets.

---

##### `cursorOffset`<sup>Optional</sup> <a name="cursorOffset" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.cursorOffset"></a>

```typescript
public readonly cursorOffset: number;
```

- *Type:* number
- *Default:* 1

Print (to stderr) where a cursor at the given position would move to after formatting.

This option cannot be used with --range-start and --range-end.

---

##### `embeddedLanguageFormatting`<sup>Optional</sup> <a name="embeddedLanguageFormatting" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.embeddedLanguageFormatting"></a>

```typescript
public readonly embeddedLanguageFormatting: EmbeddedLanguageFormatting;
```

- *Type:* projen.javascript.EmbeddedLanguageFormatting
- *Default:* EmbeddedLanguageFormatting.AUTO

Control how Prettier formats quoted code embedded in the file.

---

##### `endOfLine`<sup>Optional</sup> <a name="endOfLine" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.endOfLine"></a>

```typescript
public readonly endOfLine: EndOfLine;
```

- *Type:* projen.javascript.EndOfLine
- *Default:* EndOfLine.LF

Which end of line characters to apply.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.filepath"></a>

```typescript
public readonly filepath: string;
```

- *Type:* string
- *Default:* none

Specify the input filepath.

This will be used to do parser inference.

---

##### `htmlWhitespaceSensitivity`<sup>Optional</sup> <a name="htmlWhitespaceSensitivity" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.htmlWhitespaceSensitivity"></a>

```typescript
public readonly htmlWhitespaceSensitivity: HTMLWhitespaceSensitivity;
```

- *Type:* projen.javascript.HTMLWhitespaceSensitivity
- *Default:* HTMLWhitespaceSensitivity.CSS

How to handle whitespaces in HTML.

---

##### `insertPragma`<sup>Optional</sup> <a name="insertPragma" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.insertPragma"></a>

```typescript
public readonly insertPragma: boolean;
```

- *Type:* boolean
- *Default:* false

Insert.

---

##### `jsxSingleQuote`<sup>Optional</sup> <a name="jsxSingleQuote" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.jsxSingleQuote"></a>

```typescript
public readonly jsxSingleQuote: boolean;
```

- *Type:* boolean
- *Default:* false

Use single quotes in JSX.

---

##### `parser`<sup>Optional</sup> <a name="parser" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.parser"></a>

```typescript
public readonly parser: string;
```

- *Type:* string
- *Default:* Prettier automatically infers the parser from the input file path, so you shouldn’t have to change this setting.

Which parser to use.

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.plugins"></a>

```typescript
public readonly plugins: string[];
```

- *Type:* string[]
- *Default:* []

Add a plugin.

Multiple plugins can be passed as separate `--plugin`s.

---

##### `pluginSearchDirs`<sup>Optional</sup> <a name="pluginSearchDirs" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.pluginSearchDirs"></a>

```typescript
public readonly pluginSearchDirs: string[];
```

- *Type:* string[]
- *Default:* []

Custom directory that contains prettier plugins in node_modules subdirectory.

Overrides default behavior when plugins are searched relatively to the location of
Prettier.
Multiple values are accepted.

---

##### `printWidth`<sup>Optional</sup> <a name="printWidth" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.printWidth"></a>

```typescript
public readonly printWidth: number;
```

- *Type:* number
- *Default:* 80

The line length where Prettier will try wrap.

---

##### `proseWrap`<sup>Optional</sup> <a name="proseWrap" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.proseWrap"></a>

```typescript
public readonly proseWrap: ProseWrap;
```

- *Type:* projen.javascript.ProseWrap
- *Default:* ProseWrap.PRESERVE

How to wrap prose.

---

##### `quoteProps`<sup>Optional</sup> <a name="quoteProps" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.quoteProps"></a>

```typescript
public readonly quoteProps: QuoteProps;
```

- *Type:* projen.javascript.QuoteProps
- *Default:* QuoteProps.ASNEEDED

Change when properties in objects are quoted.

---

##### `rangeEnd`<sup>Optional</sup> <a name="rangeEnd" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number
- *Default:* null

Format code ending at a given character offset (exclusive).

The range will extend forwards to the end of the selected statement.
This option cannot be used with --cursor-offset.

---

##### `rangeStart`<sup>Optional</sup> <a name="rangeStart" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number
- *Default:* 0

Format code starting at a given character offset.

The range will extend backwards to the start of the first line containing the selected
statement.
This option cannot be used with --cursor-offset.

---

##### `requirePragma`<sup>Optional</sup> <a name="requirePragma" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.requirePragma"></a>

```typescript
public readonly requirePragma: boolean;
```

- *Type:* boolean
- *Default:* false

Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.

---

##### `semi`<sup>Optional</sup> <a name="semi" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.semi"></a>

```typescript
public readonly semi: boolean;
```

- *Type:* boolean
- *Default:* true

Print semicolons.

---

##### `singleQuote`<sup>Optional</sup> <a name="singleQuote" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.singleQuote"></a>

```typescript
public readonly singleQuote: boolean;
```

- *Type:* boolean
- *Default:* true

Use single quotes instead of double quotes.

---

##### `tabWidth`<sup>Optional</sup> <a name="tabWidth" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.tabWidth"></a>

```typescript
public readonly tabWidth: number;
```

- *Type:* number
- *Default:* 2

Number of spaces per indentation level.

---

##### `trailingComma`<sup>Optional</sup> <a name="trailingComma" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.trailingComma"></a>

```typescript
public readonly trailingComma: TrailingComma;
```

- *Type:* projen.javascript.TrailingComma
- *Default:* TrailingComma.ES5

Print trailing commas wherever possible when multi-line.

---

##### `useTabs`<sup>Optional</sup> <a name="useTabs" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.useTabs"></a>

```typescript
public readonly useTabs: boolean;
```

- *Type:* boolean
- *Default:* false

Indent with tabs instead of spaces.

---

##### `vueIndentScriptAndStyle`<sup>Optional</sup> <a name="vueIndentScriptAndStyle" id="@hallcor/pulumi-projen-project-types.PrettierSettings.property.vueIndentScriptAndStyle"></a>

```typescript
public readonly vueIndentScriptAndStyle: boolean;
```

- *Type:* boolean
- *Default:* false

Indent script and style tags in Vue files.

---

### PulumiPythonOptions <a name="PulumiPythonOptions" id="@hallcor/pulumi-projen-project-types.PulumiPythonOptions"></a>

PulumiPythonOptions.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.PulumiPythonOptions.Initializer"></a>

```typescript
import { PulumiPythonOptions } from '@hallcor/pulumi-projen-project-types'

const pulumiPythonOptions: PulumiPythonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PulumiPythonOptions.property.pulumiVersion">pulumiVersion</a></code> | <code>string</code> | The pulumi version to use. |

---

##### `pulumiVersion`<sup>Optional</sup> <a name="pulumiVersion" id="@hallcor/pulumi-projen-project-types.PulumiPythonOptions.property.pulumiVersion"></a>

```typescript
public readonly pulumiVersion: string;
```

- *Type:* string
- *Default:* >=3.153 <4.0

The pulumi version to use.

The version range should be valid semver

---

### PythonComponentOptions <a name="PythonComponentOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions"></a>

PythonComponentOptions.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.Initializer"></a>

```typescript
import { PythonComponentOptions } from '@hallcor/pulumi-projen-project-types'

const pythonComponentOptions: PythonComponentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.classifiers">classifiers</a></code> | <code>string[]</code> | A list of PyPI trove classifiers that describe the project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.componentName">componentName</a></code> | <code>string</code> | The name of the pulumi component. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. Dependencies use the format: `<module>@<semver>`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.description">description</a></code> | <code>string</code> | A short description of the package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. Dependencies use the format: `<module>@<semver>`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitIdentity">gitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use when pushing the release commit and tag Note: if you use the default github-actions user then the Push/Tag will not trigger any other workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.homepage">homepage</a></code> | <code>string</code> | A URL to the website of the project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.license">license</a></code> | <code>string</code> | License of this package as an SPDX identifier. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.packageName">packageName</a></code> | <code>string</code> | Package name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Use projenrc in javascript. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options related to projenrc in JavaScript. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcPython">projenrcPython</a></code> | <code>boolean</code> | Use projenrc in Python. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcPythonOptions">projenrcPythonOptions</a></code> | <code>projen.python.ProjenrcOptions</code> | Options related to projenrc in python. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use projenrc in TypeScript. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcTsOptions</code> | Options related to projenrc in TypeScript. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pulumiPythonOptions">pulumiPythonOptions</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.PulumiPythonOptions">PulumiPythonOptions</a></code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pytest">pytest</a></code> | <code>boolean</code> | Include pytest tests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pytestOptions">pytestOptions</a></code> | <code>projen.python.PytestOptions</code> | pytest options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pythonExec">pythonExec</a></code> | <code>string</code> | Path to the python executable to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.sampleTestdir">sampleTestdir</a></code> | <code>string</code> | Location of sample tests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.setuptools">setuptools</a></code> | <code>boolean</code> | Use setuptools with a setup.py script for packaging and publishing. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Author's e-mail.

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

Author's name.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* $PYTHON_MODULE_NAME

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `version`<sup>Required</sup> <a name="version" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

Version of the package.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

A list of PyPI trove classifiers that describe the project.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `componentName`<sup>Optional</sup> <a name="componentName" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string
- *Default:* the project `name`

The name of the pulumi component.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project. Dependencies use the format: `<module>@<semver>`.

Additional dependencies can be added via `project.addDependency()`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the package.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project. Dependencies use the format: `<module>@<semver>`.

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* github-actions user

The git identity to use when pushing the release commit and tag Note: if you use the default github-actions user then the Push/Tag will not trigger any other workflows.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

A URL to the website of the project.

---

##### `license`<sup>Optional</sup> <a name="license" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License of this package as an SPDX identifier.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Package name.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in javascript.

This will install `projen` as a JavaScript dependency and add a `synth`
task which will run `.projenrc.js`.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options related to projenrc in JavaScript.

---

##### `projenrcPython`<sup>Optional</sup> <a name="projenrcPython" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcPython"></a>

```typescript
public readonly projenrcPython: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in Python.

This will install `projen` as a Python dependency and add a `synth`
task which will run `.projenrc.py`.

---

##### `projenrcPythonOptions`<sup>Optional</sup> <a name="projenrcPythonOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcPythonOptions"></a>

```typescript
public readonly projenrcPythonOptions: ProjenrcOptions;
```

- *Type:* projen.python.ProjenrcOptions
- *Default:* default options

Options related to projenrc in python.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in TypeScript.

This will create a tsconfig file (default: `tsconfig.projen.json`)
and use `ts-node` in the default task to parse the project source files.

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcTsOptions;
```

- *Type:* projen.typescript.ProjenrcTsOptions
- *Default:* default options

Options related to projenrc in TypeScript.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `pulumiPythonOptions`<sup>Optional</sup> <a name="pulumiPythonOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pulumiPythonOptions"></a>

```typescript
public readonly pulumiPythonOptions: PulumiPythonOptions;
```

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.PulumiPythonOptions">PulumiPythonOptions</a>

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pytest"></a>

```typescript
public readonly pytest: boolean;
```

- *Type:* boolean
- *Default:* true

Include pytest tests.

---

##### `pytestOptions`<sup>Optional</sup> <a name="pytestOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pytestOptions"></a>

```typescript
public readonly pytestOptions: PytestOptions;
```

- *Type:* projen.python.PytestOptions
- *Default:* defaults

pytest options.

---

##### `pythonExec`<sup>Optional</sup> <a name="pythonExec" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.pythonExec"></a>

```typescript
public readonly pythonExec: string;
```

- *Type:* string
- *Default:* "python"

Path to the python executable to use.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `sampleTestdir`<sup>Optional</sup> <a name="sampleTestdir" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.sampleTestdir"></a>

```typescript
public readonly sampleTestdir: string;
```

- *Type:* string
- *Default:* "tests"

Location of sample tests.

Typically the same directory where project tests will be located.

---

##### `setuptools`<sup>Optional</sup> <a name="setuptools" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.setuptools"></a>

```typescript
public readonly setuptools: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use setuptools with a setup.py script for packaging and publishing.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@hallcor/pulumi-projen-project-types.PythonComponentOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

### TagReleaseOptions <a name="TagReleaseOptions" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions"></a>

TagReleaseOptions.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.Initializer"></a>

```typescript
import { TagReleaseOptions } from '@hallcor/pulumi-projen-project-types'

const tagReleaseOptions: TagReleaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.branch">branch</a></code> | <code>string</code> | The default branch name to release from. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.task">task</a></code> | <code>projen.Task</code> | The task to execute in order to create the release artifacts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.versionFile">versionFile</a></code> | <code>string</code> | A name of a .json file to set the `version` field in after a bump. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.githubRelease">githubRelease</a></code> | <code>boolean</code> | Create a GitHub release for each release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.gitIdentity">gitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use when pushing the release commit and tag Note: if you use the default github-actions user then the Push/Tag will not trigger any other workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | Node version to setup in GitHub workflows if any node-based CLI utilities are needed. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowPermissions">workflowPermissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | Permissions granted to the release workflow job. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `branch`<sup>Required</sup> <a name="branch" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The default branch name to release from.

Use `majorVersion` to restrict this branch to only publish releases with a
specific major version.

You can add additional branches using `addBranch()`.

---

##### `task`<sup>Required</sup> <a name="task" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

The task to execute in order to create the release artifacts.

Artifacts are
expected to reside under `artifactsDirectory` (defaults to `dist/`) once
build is complete.

---

##### `versionFile`<sup>Required</sup> <a name="versionFile" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.versionFile"></a>

```typescript
public readonly versionFile: string;
```

- *Type:* string

A name of a .json file to set the `version` field in after a bump.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `githubRelease`<sup>Optional</sup> <a name="githubRelease" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.githubRelease"></a>

```typescript
public readonly githubRelease: boolean;
```

- *Type:* boolean
- *Default:* true

Create a GitHub release for each release.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* github-actions user

The git identity to use when pushing the release commit and tag Note: if you use the default github-actions user then the Push/Tag will not trigger any other workflows.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* "lts/*""

Node version to setup in GitHub workflows if any node-based CLI utilities are needed.

For example `publib`, the CLI projen uses to publish releases,
is an npm library.

---

##### `workflowPermissions`<sup>Optional</sup> <a name="workflowPermissions" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowPermissions"></a>

```typescript
public readonly workflowPermissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions
- *Default:* `{ contents: JobPermission.WRITE }`

Permissions granted to the release workflow job.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

### TypeScriptComponentOptions <a name="TypeScriptComponentOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions"></a>

TypeScriptComponentOptions.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.Initializer"></a>

```typescript
import { TypeScriptComponentOptions } from '@hallcor/pulumi-projen-project-types'

const typeScriptComponentOptions: TypeScriptComponentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.componentName">componentName</a></code> | <code>string</code> | The name of the pulumi component. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.eslintOptions">eslintOptions</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions">EslintOptions</a></code> | Eslint options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitIdentity">gitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use when pushing the release commit and tag Note: if you use the default github-actions user then the Push/Tag will not trigger any other workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.prettierOptions">prettierOptions</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions">PrettierOptions</a></code> | Prettier options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `componentName`<sup>Optional</sup> <a name="componentName" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string
- *Default:* the `moduleName`

The name of the pulumi component.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* src/index.ts

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.EslintOptions">EslintOptions</a>
- *Default:* opinionated default options

Eslint options.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* github-actions user

The git identity to use when pushing the release commit and tag Note: if you use the default github-actions user then the Push/Tag will not trigger any other workflows.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* true

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.PrettierOptions">PrettierOptions</a>
- *Default:* default options

Prettier options.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptComponentOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### TypeScriptProjectProps <a name="TypeScriptProjectProps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps"></a>

TypeScriptProjectProps.

#### Initializer <a name="Initializer" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.Initializer"></a>

```typescript
import { TypeScriptProjectProps } from '@hallcor/pulumi-projen-project-types'

const typeScriptProjectProps: TypeScriptProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.eslintOptions">eslintOptions</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.EslintOptions">EslintOptions</a></code> | Eslint options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.prettierOptions">prettierOptions</a></code> | <code><a href="#@hallcor/pulumi-projen-project-types.PrettierOptions">PrettierOptions</a></code> | Prettier options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `name`<sup>Required</sup> <a name="name" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.EslintOptions">EslintOptions</a>
- *Default:* opinionated default options

Eslint options.

---

##### `github`<sup>Optional</sup> <a name="github" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* true

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* <a href="#@hallcor/pulumi-projen-project-types.PrettierOptions">PrettierOptions</a>
- *Default:* default options

Prettier options.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@hallcor/pulumi-projen-project-types.TypeScriptProjectProps.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---



