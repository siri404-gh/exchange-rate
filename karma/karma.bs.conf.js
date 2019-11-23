/* eslint-disable camelcase */
const { customLaunchers, browsers } = require('./karma.bs.launchers');
const webpackConfig = require('../webpack/webpack.test');
const { SHORT_NAME } = require('../src/variables');

module.exports = function (config) {
  config.set({
    browserStack: {
      username: process.env.BROWSERSTACK_USER,
      accessKey: process.env.BROWSERSTACK_TOKEN,
      project: SHORT_NAME,
      video: false,
    },
    customLaunchers,
    browsers,
    basePath: '..',
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
      './src/client/test.js',
    ],
    preprocessors: {
      './src/client/test.js': [ 'webpack', 'sourcemap' ],
    },
    reporters: [ 'dots', 'BrowserStack' ],
    webpack: webpackConfig,
    logLevel: config.LOG_INFO,
  });
};