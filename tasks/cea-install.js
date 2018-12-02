#!/usr/bin/env node
/* eslint no-console: 0 */

// THIS SCRIPT SHOULD ONLY USE NATIVE NODE.JS APIs, NO PACKAGES FROM NPM ALLOWED
const copyFolder = require('./copy-folder');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');
const commander = require('commander');
const templatePkg = require(path.join(__dirname, '..', 'package.json'));

let TARGET_DIR;

console.log('-------------------------------------------------------');
console.log('Welcome to Create Evergreen App ♻️');
console.log('-------------------------------------------------------');

const program = new commander.Command(templatePkg.name)
  .version(templatePkg.version)
  .arguments('<application-directory>')
  .usage(`${chalk.green('<application-directory>')} [options]`)
  .action(name => {
    TARGET_DIR = name;
  })
  .option('--yarn')
  .parse(process.argv);

if (program.yarn) {
  console.log('Yarn Enabled');
}

// Check target application directory/name is included in args
// warn if directory is present, else create new target directory
const checkTargetDir = async () => {
  if (typeof TARGET_DIR === 'undefined') {
    console.error(
      `Missing Project Directory! Please specifiy the application name e.g. ${chalk.green('create-evergreen-app my-app')}`
    );
    console.log();
    console.log(`Run ${chalk.green('create-evergreen-app --help')} for available options`);
    process.exit(1); // eslint-disable-line no-process-exit
  }

  const targetExists = await fs.existsSync(TARGET_DIR);

  if (targetExists) {
    console.error(
      `${TARGET_DIR} already exists, existing project detected? Delete ${appDir} to try again or run from a different directory.`
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }

  return await fs.mkdirSync(TARGET_DIR);
};

// Create new package.json
const npmInit = async () => {
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
  const packageFiles = require(path.join(__dirname, '..', 'package.json')).files;
  const files = packageFiles.filter((file) => {
    if (copyBlacklist.indexOf(file) < 0) {
      return file;
    }
  });

  await createGitIgnore();

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

// Create the missing gitignore because npm won't publish it https://docs.npmjs.com/files/package.json#files
const createGitIgnore = () => {
  return new Promise((resolve, reject) => {

    const resolvedPath = path.join(TARGET_DIR, '.gitignore');
    const stream = fs.createWriteStream(resolvedPath);
    const patterns = ['*DS_Store', '*.log', 'node_modules/', 'public/', 'reports/'];

    stream.once('open', () => {
      patterns.forEach(pattern => {
        stream.write(`${pattern}\n`);
      });
      stream.end();
    });
    stream.once('close', () => {
      resolve();
    });
    stream.once('error', (err) => {
      reject(err);
    });
  });
};

// Install npm dependencies
const install = () => {
  return new Promise((resolve, reject) => {
    const pkgMng = program.yarn ? 'yarn' : 'npm'; // default to npm
    const command = os.platform() === 'win32' ? `${pkgMng}.cmd` : pkgMng;
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
};

const run = async () => {
  try {
    console.log('Preparing project directory...');
    await checkTargetDir();

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