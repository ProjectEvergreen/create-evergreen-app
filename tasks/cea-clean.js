const cp = require('child_process');
const CLEANUP_DIRS = ['docs', '.circleci', '.github', '.git', '.npmignore', 'tasks'];

CLEANUP_DIRS.forEach((directory) => {
  cp.execSync(`rm -rf ${TARGET_DIR}/${directory}`);
});