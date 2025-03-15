import {
  JsiiProjectOptions as ProjenJsiiProjectOptions,
  JsiiProject as ProjenJsiiProject,
} from 'projen/lib/cdk';
import { GithubCredentials as ProjenGithubCredentials } from 'projen/lib/github';
import { TypeScriptProject } from 'projen/lib/typescript';
import { GithubCredentials } from '../github-credentials';
export interface JsiiProjectOptions
  extends Omit<ProjenJsiiProjectOptions, 'projenCredentials'> {
  projenCredentials?: GithubCredentials;
}

export function setWorkflowPermissions(
  project: TypeScriptProject,
  creds?: GithubCredentials,
) {
  if (creds?.permissions) {
    const upgradeWorkflows = project.upgradeWorkflow?.workflows;
    upgradeWorkflows?.forEach((workflow) => {
      const pr = workflow.getJob('pr');
      workflow.updateJob('pr', {
        ...pr,
        permissions: {
          ...pr.permissions,
          ...creds?.permissions,
        },
      });
    });
    if (project.buildWorkflow && project.github) {
      const buildName = project.buildWorkflow.name;
      const buildWorkflow = project.github.tryFindWorkflow(buildName);
      if (!buildWorkflow) {
        throw new Error(`could not find build workflow ${buildName}`);
      }
      const mutationJob = buildWorkflow.getJob('self-mutation');
      buildWorkflow?.updateJob('self-mutation', {
        ...mutationJob,
        permissions: {
          ...mutationJob.permissions,
          ...creds.permissions,
        },
      });
    }
  }
}

export class JsiiProject extends ProjenJsiiProject {
  constructor(options: JsiiProjectOptions) {
    const projenCredentials = options.projenCredentials;
    let githubCredentials: ProjenGithubCredentials | undefined;
    if (options.projenCredentials) {
      const creds = ProjenGithubCredentials.fromPersonalAccessToken();
      (creds as any).options.setupSteps = options.projenCredentials.setupSteps;
      (creds as any).options.tokenRef = options.projenCredentials.tokenRef;
      githubCredentials = creds;
    }
    super({
      ...options,
      projenCredentials: githubCredentials,
    });
    setWorkflowPermissions(this, projenCredentials);
  }
}
