#!/usr/bin/env node
/* eslint no-console: 0 */

const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');

console.log('-------------------------------------------------------');
console.log('Welcome to Create Evergreen App ♻️');
console.log('-------------------------------------------------------');

const checkTargetDir = async appDir => {
  if (!appDir) {
    console.error(
      'Missing Project Directory! Please specifiy the application name e.g. create-evergreen-app my-app'
    );
    process.exit(); // eslint-disable-line no-process-exit
  }

  const targetExists = await fs.pathExists(appDir);

  if (targetExists) {
    // should we warn about this first?
    await fs.remove(appDir);
  }
  await fs.ensureDir(appDir);
  return appDir;
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
    // Check params
    console.log('Preparing project directory...');
    const TARGET_DIR = await checkTargetDir(process.argv[2]);

    // Create new package.json
    const templatePkg = require(path.join(__dirname, '..', 'package.json'));
    const appPkg = {
      name: TARGET_DIR,
      version: '0.1.0',
      private: true
    };

    appPkg.scripts = templatePkg.scripts;
    appPkg.devDependencies = templatePkg.devDependencies;
    appPkg.dependencies = templatePkg.dependencies;
    appPkg.eslintConfig = templatePkg.eslintConfig;

    await fs.writeFileSync(
      path.join(TARGET_DIR, 'package.json'),
      JSON.stringify(appPkg, null, 2) + os.EOL
    );

    // Copy template files to target
    console.log('Copying project files...');
    const copyDirs = ['src', 'docs', 'config'];

    await Promise.all(
      copyDirs.map(async directory => {
        const templateDir = path.join(__dirname, '..', directory);

        if (await fs.existsSync(templateDir)) {
          return await fs.copySync(
            templateDir,
            path.join(TARGET_DIR, directory)
          );
        } else {
          console.error("Directory doesn't exist! :" + templateDir);
          process.exit(); // eslint-disable-line no-process-exit
        }
      })
    );

    // change directory to new app directory
    process.chdir(path.resolve(process.cwd(), TARGET_DIR));
    console.log('Installing project dependencies...');
    await install();
    console.log('-------------------------------------------------------');
    console.log('Success, your project is ready to go!');
    console.log(`Just run: cd ${TARGET_DIR}`);
    console.log('And then launch your project with: npm run develop');
    console.log('-------------------------------------------------------');
  } catch (err) {
    console.error(err);
  }
  process.exit(); // eslint-disable-line no-process-exit
};

run();
