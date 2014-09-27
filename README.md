Hybrid App Selenium Test
=============

A repository with example code how to use Selenium to automate testing of a cordova application

## Requirements
* Node
* Npm
* Selendroid (http://selendroid.io)
* Java (required for Selendroid)
* Android Phone/tablet

## How to use

* Clone the repository
* Run `npm install`
* Run `node_modules/.bin/cordova build android`
* Start Selendroid with the command: `java -jar selendroid-standalone-0.11.0-with-dependencies.jar -app platforms\android\ant-build\HybridSeleniumTest-debug.apk`
* To generate code coverage report execute `node_modules\.bin\istanbul cover node_modules\mocha\bin\_mocha test/open-app.js` (TODO: not working yet)
