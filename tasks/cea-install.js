#!/usr/bin/env node
/* eslint no-console: 0 */

const copyFolder = require('./copy-folder');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');
const commander = require('commander');
const scriptPkg = require(path.join(__dirname, '..', '/package.json'));
const templatePkg = require(path.join(__dirname, '..', '/template/package.json'));
const filterFiles = require('./filter-files');

let TARGET_DIR;

console.log(`${chalk.rgb(175, 207, 71)('-------------------------------------------------------')}`);
console.log(`${chalk.rgb(175, 207, 71)('Welcome to Create Evergreen App ♻️')}`);
console.log(`${chalk.rgb(175, 207, 71)('-------------------------------------------------------')}`);

const program = new commander.Command(scriptPkg.name)
  .version(scriptPkg.version)
  .arguments('<application-directory>')
  .usage(`${chalk.green('<application-directory>')} [options]`)
  .action(name => {
    TARGET_DIR = name;
  })
  .option('--yarn', 'Use yarn package manager instead of npm default')
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
      `${TARGET_DIR} already exists, existing project detected? Delete ${TARGET_DIR} to try again or run from a different directory.`
    );
    process.exit(1); // eslint-disable-line no-process-exit
  }

  return await fs.mkdirSync(TARGET_DIR);
};

// Create new package.json
const npmInit = async () => {
  let appPkg = templatePkg;

  appPkg.name = TARGET_DIR;

  await fs.writeFileSync(
    path.join(TARGET_DIR, 'package.json'),
    JSON.stringify(appPkg, null, 2) + os.EOL
  );
};

// Copy root and src files to target directory
const srcInit = async () => {
  let packageFiles = require(path.join(__dirname, '..', './package.json')).files;

  packageFiles = filterFiles(packageFiles);

  await createGitIgnore();

  return await Promise.all(
    packageFiles.map(async file => {
      const resolvedPath = path.join(__dirname, '..', '/template/', file);

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

    console.log('Copying project files...');
    await srcInit();

    console.log('Initializing npm dependencies...');
    npmInit();

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