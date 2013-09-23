var util = require('util');
var growl = require('growl');
var path = require('path');

var MSG_SUCCESS = '%d tests passed in %s.';
var MSG_FAILURE = '%d/%d tests failed in %s.';
var MSG_ERROR = '';

var OPTIONS = {
  success: {
    name: 'Success',
    title: 'PASSED - %s',
    icon: path.join(__dirname, 'images/success.png')
  },
  failed: {
    name: 'Failure',
    title: 'FAILED - %s',
    icon: path.join(__dirname, 'images/failed.png')
  },
  error: {
    name: 'Aborted',
    title: 'ERROR - %s',
    icon: path.join(__dirname, 'images/error.png')
  }
};

var GrowlReporter = function(helper, logger, config) {
  var log = logger.create('reporter.growler');

  var optionsFor = function(type, browser) {
    var prefix = config && config.prefix ? config.prefix : '';
    return helper.merge(
      OPTIONS[type],
      {title: prefix + util.format(OPTIONS[type].title, browser)}
    );
  };

  this.adapters = [];
  this.onBrowserComplete = function(browser) {
    var results = browser.lastResult;
    var time = helper.formatTimeInterval(results.totalTime);

    if (results.disconnected || results.error) {
      return growl(MSG_ERROR, optionsFor('error', browser.name));
    }

    if (results.failed) {
      return growl(
        util.format(MSG_FAILURE, results.failed, results.total, time),
        optionsFor('failed', browser.name)
      );
    }

    growl(
      util.format(MSG_SUCCESS, results.success, time),
      optionsFor('success', browser.name)
    );
  };
};

GrowlReporter.$inject = ['helper', 'logger','config.growlerReporter'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:growler': ['type', GrowlReporter]
};
