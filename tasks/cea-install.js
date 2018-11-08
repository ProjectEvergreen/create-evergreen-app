#!/usr/bin/env node
/* eslint no-console: 0 */

const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');
const path = require('path');

let TARGET_DIR;
const CLEANUP_DIRS = [
  'docs',
  '.circleci',
  '.github',
  '.git',
  '.npmignore',
  'tasks'
];

console.log('-------------------------------------------------------');
console.log('Welcome to Create Evergreen App ♻️');
console.log('-------------------------------------------------------');

const checkTargetDir = appDir => {
  if (appDir) {
    TARGET_DIR = appDir;
  } else {
    console.error(
      'Missing Project Directory! Please specifiy the application name e.g. create-evergreen-app my-app'
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }
};

function install() {
  return new Promise((resolve, reject) => {
    const command = 'npm';
    const args = ['install', '--save', '--save-exact', '--loglevel', 'error'];
    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`
        });
        return;
      }
      resolve();
    });
  });
}

const run = async () => {
  try {
    // check params
    checkTargetDir(process.argv[2]);

    // overwrite existing directory or not?
    execSync(`rm -rf ${TARGET_DIR}`);

    // clone CEA from github
    execSync(
      `git clone https://github.com/ProjectEvergreen/create-evergreen-app --branch release ${TARGET_DIR}`
    );
    // clean up the new repo directory
    CLEANUP_DIRS.forEach(directory => {
      execSync(`rm -rf ${TARGET_DIR}/${directory}`);
    });
    // change directory to new app directory
    process.chdir(path.resolve(process.cwd(), TARGET_DIR));
    console.log('Installing dependencies...');
    await install();
    console.log('-------------------------------------------------------');
    console.log('Success, your project is ready to go!');
    console.log(`Just run: cd ${TARGET_DIR}`);
    console.log('And then: npm install && npm start (or use yarn)');
    console.log('-------------------------------------------------------');
  } catch (err) {
    console.error(err);
  }
  process.exit(); // eslint-disable-line no-process-exit
};

run();
