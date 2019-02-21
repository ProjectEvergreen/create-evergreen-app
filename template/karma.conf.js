const path = require('path');
const webpackConfig = require('./webpack.config.common');
const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;

process.env.CHROME_BIN = require('puppeteer').executablePath();
webpackConfig.devtool = 'inline-source-map';
webpackConfig.mode = 'development';

webpackConfig.module.rules.push({
  test: /\.js$/,
  enforce: 'post',
  exclude: [/\.spec.js$/, /node_modules/, /karma-test-shim.js$/],
  loader: 'istanbul-instrumenter-loader',
  query: {
    esModules: true
  }
});

module.exports = function (config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: '',
    files: [
      { pattern: './karma-test-shim.js', watched: false }
      // uncomment these two for Firefox, Edge support
      // { pattern: './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js', watched: false },
      // { pattern: './node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js', watched: false }
    ],
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    // currently supported by CEA out of the box: Chrome (headless) and Firefox
    // to add more browsers: http://karma-runner.github.io/3.0/config/browsers.html
    browsers: ['ChromiumHeadlessConfigured'],
    customLaunchers: {
      ChromiumHeadlessConfigured: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ] // https://github.com/Googlechrome/puppeteer/issues/290#issuecomment-322852784
      }
    },
    singleRun: true,
    captureTimeout: 210000, // https://github.com/jasmine/jasmine/issues/1413#issuecomment-334247097
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/test-results/',
      outputFile: 'test-results.xml',
      suite: 'create-evergreen-app',
      useBrowserName: false
    },
    coverageIstanbulReporter: {
      'dir': path.join(__dirname, 'reports'),
      'reports': ['html', 'cobertura', 'text-summary'],
      'report-config': {
        'html': {
          subdir: 'test-coverage'
        },
        'cobertura': {
          file: 'test-coverage/coverage.xml'
        },
        'text-summary': {}
      },
      'fixWebpackSourcePaths': true,
      'remapOptions': {
        exclude: [/\*.spec.ts/]
      },
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
      // currently not working: https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/49
      'thresholds': {
        // set to `true` to not fail the test command when thresholds are not met
        emitWarning: false,
        // thresholds for all files
        global: {
          statements: 90,
          branches: 80,
          functions: 90,
          lines: 90
        }
      }
    }
  });
};