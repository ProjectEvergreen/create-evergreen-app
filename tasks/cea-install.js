#!/usr/bin/env node
/* eslint no-console: 0 */

// THIS SCRIPT SHOULD ONLY USE NATIVE NODE.JS APIs, NO PACKAGES FROM NPM ALLOWED
const copyFolder = require('./copy-folder');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

let TARGET_DIR;

console.log('-------------------------------------------------------');
console.log('Welcome to Create Evergreen App ♻️');
console.log('-------------------------------------------------------');

// Check target application directory/name is included in args
// warn if directory is present, else create new target directory
const checkTargetDir = async appDir => {
  if (!appDir) {
    console.error(
      'Missing Project Directory! Please specifiy the application name e.g. create-evergreen-app my-app'
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }

  const targetExists = await fs.existsSync(appDir);

  if (targetExists) {
    console.error(
      `${appDir} already exists, existing project detected? Delete ${appDir} to try again or run from a different directory.`
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }

  await fs.mkdirSync(appDir);
  
  return appDir;
};

// Create new package.json
const npmInit = async () => {
  const templatePkg = require(path.join(__dirname, '..', 'package.json'));
  const appPkg = {
    name: TARGET_DIR,
    version: '0.1.0',
    private: true
  };

  appPkg.scripts = templatePkg.scripts;
  appPkg.dependencies = templatePkg.dependencies;
  appPkg.devDependencies = templatePkg.devDependencies;

  await fs.writeFileSync(
    path.join(TARGET_DIR, 'package.json'),
    JSON.stringify(appPkg, null, 2) + os.EOL
  );
};

// Copy root and src files to target directory
const srcInit = async () => {
  const copyBlacklist = ['tasks/'];
  // TODO .gitignore missing https://github.com/ProjectEvergreen/create-evergreen-app/issues/59
  const packageFiles = require(path.join(__dirname, '..', 'package.json')).files;
  const files = packageFiles.filter((file) => {
    if (copyBlacklist.indexOf(file) < 0) {
      return file;
    }
  });

  return await Promise.all(
    files.map(async file => {
      const resolvedPath = path.join(__dirname, '..', file);

      if (fs.lstatSync(resolvedPath).isDirectory()) {
        return await copyFolder(resolvedPath, TARGET_DIR);
      } else if (await fs.existsSync(resolvedPath)) {
        return await fs.copyFileSync(
          resolvedPath,
          path.join(TARGET_DIR, file)
        );
      }
    })
  );
};

// Install npm dependencies
function install() {
  return new Promise((resolve, reject) => {
    const command = os.platform() === 'win32' ? 'npm.cmd' : 'npm';
    const args = ['install', '--save', '--save-exact', '--loglevel', 'error'];
    const process = spawn(command, args, { stdio: 'inherit' });

    process.on('close', code => {
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
    console.log('Preparing project directory...');
    TARGET_DIR = await checkTargetDir(process.argv[2]);

    console.log('Initializing npm dependencies...');
    npmInit();

    console.log('Copying project files...');
    await srcInit();

    // change directory to target directory
    process.chdir(path.resolve(process.cwd(), TARGET_DIR));

    console.log('Installing project dependencies...');
    await install();

    // success!
    console.log('-------------------------------------------------------');
    console.log('Success, your project is ready to go!');
    console.log(`Just run: cd ${TARGET_DIR}`);
    console.log('And then launch your project with: npm start');
    console.log('-------------------------------------------------------');
  } catch (err) {
    console.error(err);
  }

  process.exit(); // eslint-disable-line no-process-exit
};

run();