var env = require('../environment');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine2',
  specs: ['../protractor/fail-test-with-console-errors.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
        '--verbose',
        '--enable-logging',
        '--no-sandbox',
        '--disable-gpu',
        '--headless'
      ],
      // disable Password manager popup
      prefs: {
        'credentials_enable_service': false
      }
    },
    loggingPrefs: {
      browser: 'ALL' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
    }
  },
  plugins: [{
    path: '../../../index.js',
    screenshotPath: '.tmp/failuresWithLogs',
    screenshotOnExpect: 'failure+success',
    screenshotOnSpec: 'failure+success',
    withLogs: true
  }]
};
