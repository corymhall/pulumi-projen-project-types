/**
 * Environment variables:
 *
 * - RELEASE_TAG_FILE: Release Tag file containing the bumped release tag
 * - CHANGELOG_FILE: Changelog to be used for tag annotation
 * - VERSION_FILE: Version file which needs to be committed
 *
 */
import { commit, CommitOptions } from './commit-version';

const changelog = process.env.CHANGELOG;
const releaseTagFile = process.env.RELEASE_TAG_FILE;
const versionFile = process.env.VERSION_FILE;

if (!releaseTagFile) {
  throw new Error('RELEASE_TAG_FILE is required');
}

if (!versionFile) {
  throw new Error('VERSION_FILE is required');
}

const opts: CommitOptions = {
  changelog,
  releaseTagFile: releaseTagFile,
  versionFile,
};

commit(process.cwd(), opts).catch((e: Error) => {
  console.log(e.stack);
  process.exit(1);
});
