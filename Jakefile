var path = require("path"),
    childProcess = require("child_process"),
    express = require("express"),
    im = require("istanbul-middleware");

desc("Start Istanbul coverage server")
task("start-istanbul-server", function() {
    var app = express();
    app.use('/coverage', im.createHandler());
    app.listen(4488);
}, {
    async: true
});

desc("Start Selendroid server")
task("start-selendroid-server", function() {
    var selendroid = "selendroid-standalone-0.11.0-with-dependencies.jar";
    var apk = "platforms/android/ant-build/HybridSeleniumTest-debug.apk";

    if (!process.env.ANDROID_HOME) {
        fail("ANDROID_HOME environment not set");
    }

    var p = childProcess.spawn("java", ["-jar", selendroid, "-app", apk], {
        stdio: "inherit"
    });
}, {
    async: true
});
