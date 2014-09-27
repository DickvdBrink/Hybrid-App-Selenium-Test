var webdriver = require("selenium-webdriver");
var test = require("selenium-webdriver/testing");
var executors = require("selenium-webdriver/executors");
var assert = require("assert");
var http = require("http")

var executor = executors.createExecutor("http://localhost:4444/wd/hub");
var capabilities = new webdriver.Capabilities({ aut: "io.github.dvdbrink.hybridselenium:0.0.1" });
var driver = webdriver.WebDriver.createSession(executor, capabilities);

test.describe('Open app', function() {
    this.timeout(15000);
    driver.switchTo().window("WEBVIEW");

    test.it('Device ready', function() {
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
                return title === "Hello World";
            })
        }, 6000);
    });
});
