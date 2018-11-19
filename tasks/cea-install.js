#!/usr/bin/env node
/* eslint no-console: 0 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

let TARGET_DIR;

console.log('-------------------------------------------------------');
console.log('Welcome to Create Evergreen App ♻️');
console.log('-------------------------------------------------------');

// Check target application directory/name is included in args
// remove directory if present, create new target directory
const checkTargetDir = async appDir => {
  if (!appDir) {
    console.error(
      'Missing Project Directory! Please specifiy the application name e.g. create-evergreen-app my-app'
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }

  const targetExists = await fs.existsSync(appDir);
  
  console.log('appDir', appDir);
  console.log('targetExists', targetExists);

  if (targetExists) {
    console.error(
      `${appDir} already exists, existing project detected? Delete ${appDir} to try again or run from a different directory.`
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }

  await fs.mkdirSync(appDir);
  
  return appDir;
};

// Install npm dependencies
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

// Copy template files to target
const srcInit = async () => {
  const sourceFiles = [
    '.browserslistrc',
    '.editorconfig',
    '.eslintrc',
    '.gitignore',
    '.gitattributes',
    'yarn.lock',
    'package-lock.json',
    'babel.config.js',
    'karma-test-shim.js',
    'karma.conf.js',
    'lws.config.js',
    'postcss.config.js',
    'README.md',
    'webpack.config.common.js',
    'webpack.config.develop.js',
    'webpack.config.prod.js'
  ];

  return await Promise.all(
    sourceFiles.map(async fileName => {
      const resolvedFilePath = path.join(__dirname, '..', fileName);

      console.log('resolvedFilePath', resolvedFilePath);

      if (await fs.existsSync(resolvedFilePath)) {
        return await fs.copyFileSync(
          resolvedFilePath,
          path.join(TARGET_DIR, fileName)
        );
      } else {
        console.error(`File doesn't exist! : ${resolvedFilePath}`);
        process.exit(1); // eslint-disable-line no-process-exit
      }
    })
  );
};

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