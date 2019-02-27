const expect = require('chai').expect;
const chai = require('chai').use(require('chai-as-promised'));
const should = chai.should(); // eslint-disable-line
const fs = require('fs-extra');
const path = require('path');
const TestSetup = require('./setup');
const filterFiles = require('../tasks/filter-files');
const exampleApp = 'my-app';
let setup;

before(() => {
  setup = new TestSetup();
});

const testInstall = packageManager => {
  describe(`after running script using ${packageManager} with new application name`, function () {
    this.timeout(60000);
    before(async () => {
      const pkgMng = packageManager === 'yarn' ? '--yarn' : '';

      await setup.run(['tasks/cea-install.js', exampleApp, pkgMng]);
    });

    // Only remove test install after first run, save for next test
    if (packageManager !== 'yarn') {
      after(async () => {
        await fs.remove(exampleApp);
      });
    }

    it('should create the target directory', async () => {
      const targetExists = await fs.pathExists(exampleApp);

      expect(targetExists).to.be.true;
    });
    it('should install dependencies', async () => {
      const modulesDir = path.join(exampleApp, 'node_modules');
      const modules = [
        'webpack',
        '@polymer',
        '@babel'
      ];

      return Promise.all(modules.map(async mod => {
        return await fs.pathExists(path.join(modulesDir, mod)).should.eventually.equal(true);
      }));
    });
    it('should copy project files', async () => {
      let packageFiles = require(path.join(__dirname, '..', 'package.json')).files;

      packageFiles = filterFiles(packageFiles);

      return Promise.all(packageFiles.map(async file => {
        return await fs.pathExists(path.join(exampleApp, file)).should.eventually.equal(true);
      }));
    });
  });
};

describe('after running script without application name', () => {
  it('should display the missing application name error', async () => {
    await setup.run(['tasks/cea-install.js'], true).catch((err) => {
      expect(err).to.be.equal('Missing Project Directory! Please specifiy the application name e.g. create-evergreen-app my-app\n');
    });
  });
});

testInstall('npm');
testInstall('yarn');

describe('after running script with pre-existing application of the same name', () => {
  after(async () => {
    await fs.remove(exampleApp);
  });
  it('should display an error', async () => {
    await setup.run(['tasks/cea-install.js', exampleApp]).catch((err) => {
      expect(err).to.be.equal(`${exampleApp} already exists, existing project detected? Delete my-app to try again or run from a different directory.\n`);
    });
  });
});
