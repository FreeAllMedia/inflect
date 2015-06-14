// Karma configuration
// Generated on Sat Jun 13 2015 13:23:14 GMT-0600 (MDT)

var webdriverConfig = {
    hostname: "ondemand.saucelabs.com",
    port: 80,
    user: process.env.SAUCE_USERNAME,
    pwd: process.env.SAUCE_ACCESS_KEY
};

var customLaunchers = {
    "sl_chrome_43": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "chrome",
        version: "43",
        pseudoActivityInterval: 30000
    },
    "sl_chrome_42": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "chrome",
        version: "42",
        pseudoActivityInterval: 30000
    },
    "sl_chrome_36": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "chrome",
        version: "36",
        pseudoActivityInterval: 30000
    },
    "sl_chrome_31": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "chrome",
        version: "31",
        pseudoActivityInterval: 30000
    },
    "sl_firefox_37": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "firefox",
        version: "37",
        pseudoActivityInterval: 30000
    },
    "sl_firefox_38": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "firefox",
        version: "38",
        pseudoActivityInterval: 30000
    },
    "sl_ie_9": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "internet explorer",
        version: "9",
        pseudoActivityInterval: 30000
    },
    "sl_ie_10": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "internet explorer",
        version: "10",
        pseudoActivityInterval: 30000
    },
    "sl_ie_11": {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "internet explorer",
        version: "11",
        pseudoActivityInterval: 30000
    }
};

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["browserify", "mocha", "chai"], // "detectBrowsers"],


    // list of files / patterns to load in the browser
    files: [
      "node_modules/babel/polyfill.js",
      "es5/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "node_modules/babel/polyfill.js": ["browserify"],
        "es5/**/*.js": ["browserify"]
    },

    browserify: {
      debug: true
    },

    sauceLabs: {
        testName: "Jargon.js Unit Tests",
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    },

    customLaunchers: customLaunchers,

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "saucelabs"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers), // "Chrome", "Firefox", "Safari", "Opera", "IE"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
