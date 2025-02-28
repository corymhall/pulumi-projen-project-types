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

new ReleaseWorkflow(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@hallcor/pulumi-projen-project-types.ReleaseWorkflow.Initializer.parameter.id"></a>

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

### TypeScriptProject <a name="TypeScriptProject" id="@hallcor/pulumi-projen-project-types.TypeScriptProject"></a>

#### Initializers <a name="Initializers" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.Initializer"></a>

```typescript
import { TypeScriptProject } from '@hallcor/pulumi-projen-project-types'

new TypeScriptProject(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hallcor/pulumi-projen-project-types.TypeScriptProject.Initializer.parameter.options">options</a></code> | <code>projen.typescript.TypeScriptProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@hallcor/pulumi-projen-project-types.TypeScriptProject.Initializer.parameter.options"></a>

- *Type:* projen.typescript.TypeScriptProjectOptions

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
| <code><a href="#@hallcor/pulumi-projen-project-types.PulumiPythonOptions.property.pulumiVersion">pulumiVersion</a></code> | <code>string</code> | The pulumi version to use The version range should be valid semver. |

---

##### `pulumiVersion`<sup>Optional</sup> <a name="pulumiVersion" id="@hallcor/pulumi-projen-project-types.PulumiPythonOptions.property.pulumiVersion"></a>

```typescript
public readonly pulumiVersion: string;
```

- *Type:* string
- *Default:* >=3.150 <4.0

The pulumi version to use The version range should be valid semver.

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
- *Default:* the `moduleName`

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
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.bumpFile">bumpFile</a></code> | <code>string</code> | The file to bump the version in. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.githubRelease">githubRelease</a></code> | <code>boolean</code> | Create a GitHub release for each release. |
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

##### `bumpFile`<sup>Optional</sup> <a name="bumpFile" id="@hallcor/pulumi-projen-project-types.TagReleaseOptions.property.bumpFile"></a>

```typescript
public readonly bumpFile: string;
```

- *Type:* string
- *Default:* package.json

The file to bump the version in.

Must be a commit-and-tag-version compatible bump file

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



