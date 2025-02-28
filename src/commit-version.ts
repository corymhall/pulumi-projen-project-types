import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';
import * as path from 'path';
import * as utils from 'projen/lib/util';

export interface CommitOptions {
  /**
   * Path to release tag file housing the release version.
   *
   * Relative to cwd.
   *
   * @example `dist/releaseTag.txt`
   */
  readonly releaseTagFile: string;

  /**
   * Path to the release version file which needs to be committed
   *
   * Relative to cwd.
   *
   * @example `.version.json`
   */
  readonly versionFile: string;

  /**
   * Path to project changelog file.
   *
   * Relative to cwd.
   *
   * @example `CHANGELOG.md`
   */
  readonly changelog?: string;
}

/**
 * Git add and maybe commit the version file.
 *
 * This is meant to be used in combination with the `update-changelog`
 * projen workflow. It will be run before `update-changelog`
 *
 * The update-changelog workflow will add and commit the changelog
 * file if you are NOT using the `continuous` release trigger. In that case
 * this will simply `git add` the version file so it will be committed in
 * `update-changelog`. If there is no changelog then `update-changelog` will not
 * run and we need to both `git add` and `git commit`
 *
 * @param cwd working directory (git repository)
 * @param options options
 */
export async function commit(cwd: string, options: CommitOptions) {
  const git = (cmd: string) => utils.exec(`git ${cmd}`, { cwd: cwd });

  const releaseTagFilePath = join(cwd, options.releaseTagFile);
  const versionFilePath = join(cwd, options.versionFile);
  const versionFileName = path.basename(options.versionFile);
  const changelogFilePath = options.changelog
    ? join(cwd, options.changelog)
    : undefined;

  if (!existsSync(releaseTagFilePath)) {
    throw new Error(`No release tag file present at ${releaseTagFilePath}`);
  }

  if (!existsSync(versionFilePath)) {
    throw new Error(`No release version file present at ${versionFilePath}`);
  }

  const changeLogExists = changelogFilePath && existsSync(changelogFilePath);

  let releaseTag = (await utils.tryReadFile(releaseTagFilePath)).trim();

  if (!releaseTag) {
    throw new Error(`No version present in file at ${releaseTagFilePath}`);
  }

  const commitPath = join(cwd, versionFileName);
  copyFileSync(versionFilePath, commitPath);

  git(`add ${commitPath}`);

  if (!changeLogExists) {
    git(`commit -m "chore(release): ${releaseTag}"`);
  }
}
