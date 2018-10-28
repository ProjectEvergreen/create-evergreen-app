#!/usr/bin/env node
/* eslint no-console: 0 */

const cp = require('child_process');

const TARGET_DIR = process.argv[2]; 
const CLEANUP_DIRS = ['docs', '.circleci', '.github', '.git', '.npmignore', 'tasks'];

console.log('-------------------------------------------------------');
console.log('Welcome to Create Evergreen App ♻️');
console.log('-------------------------------------------------------');

// overwrite existing directory or not?
cp.execSync(`rm -rf ${TARGET_DIR}`);

// clone CEA from github
cp.execSync(`git clone https://github.com/ProjectEvergreen/create-evergreen-app --branch release ${TARGET_DIR}`);

// clean up the new repo directory
CLEANUP_DIRS.forEach((directory) => {
  cp.execSync(`rm -rf ${TARGET_DIR}/${directory}`);
});

console.log('-------------------------------------------------------');
console.log('Success, your project is ready to go!');
console.log(`Just run: cd ${TARGET_DIR}`);
console.log('And then: npm install && npm start (or use yarn)');
console.log('-------------------------------------------------------');

process.exit(); // eslint-disable-line no-process-exit