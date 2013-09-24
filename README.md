karma-growler-reporter
======================

> Report test results using [growl](https://github.com/visionmedia/node-growl) (copied from [karma-growl-reporter](https://github.com/karma-runner/karma-growl-reporter), growly replaced with growl).

## Installation
This plugin uses [growl](https://github.com/visionmedia/node-growl), which uses [terminal-notifier](https://github.com/alloy/terminal-notifier) for Mac OS X, [libnotify-bin](http://packages.ubuntu.com/search?keywords=libnotify-bin) for Linux and [growlnotify](http://www.growlforwindows.com/gfw/help/growlnotify.aspx) for Windows.

The easiest way is to keep `karma-growler-reporter` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-growler-reporter": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-growler-reporter --save-dev
```

###

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'growler'],
  });
};
```

You can pass list of reporters as a CLI argument too:
```bash
  karma start --reporters growler ,dots
```

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com

