const expect = require('chai').expect;
const chai = require('chai').use(require('chai-as-promised'));
const should = chai.should(); // eslint-disable-line
const fs = require('fs-extra');
const path = require('path');
const TestSetup = require('./setup');
const exampleApp = 'my-app';
const filterFiles = require('../tasks/filter-files');
let setup;

before(() => {
  setup = new TestSetup();
});

describe('after running script without application name', () => {
  it('should display the missing application name error', async () => {
    await setup.run(['tasks/cea-install.js'], true).catch((err) => {
      expect(err).to.be.equal('Missing Project Directory! Please specifiy the application name e.g. create-evergreen-app my-app\n');
    });
  });
});

describe('after running script with new application name', function () {
  this.timeout(60000);
  before(async () => {
    await setup.run(['tasks/cea-install.js', exampleApp]);
  });

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
    let packageFiles = require(path.join(__dirname, '..', '/package.json')).files;
  
    packageFiles = filterFiles(packageFiles);
    return Promise.all(packageFiles.map(async file => {
      return await fs.pathExists(path.join(exampleApp, file)).should.eventually.equal(true);
    }));
  });
});

describe('after running script with pre-existing application of the same name', () => {
  after(async () => {
    await fs.remove(exampleApp);
  });
  it('should display an error', async () => {
    await setup.run(['tasks/cea-install.js', exampleApp]).catch((err) => {
      expect(err).to.be.equal('my-app already exists, existing project detected? Delete my-app to try again or run from a different directory.\n');
    });
  });
});