#!/usr/bin/env node
// helpful just for cleanup up a CEA install while testing the release process
const cp = require('child_process');
const CLEANUP_DIRS = ['docs', '.circleci', '.github', '.git', '.npmignore', 'tasks'];

CLEANUP_DIRS.forEach((directory) => {
  cp.execSync(`rm -rf ${directory}`);
});