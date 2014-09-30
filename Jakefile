var path = require("path"),
    fs = require("fs"),
    http = require("http"),
    childProcess = require("child_process"),
    express = require("express"),
    im = require("istanbul-middleware");

desc("Start Istanbul coverage server")
task("start-istanbul-server", function() {
    var app = express();
    app.use('/coverage', im.createHandler());
    app.listen(4488);

    process.on('SIGINT', function() {
        var options = {
            host: "localhost",
            port: 4488,
            path: "/coverage/download",
            method: "GET"
        };
        console.log("Download coverage.zip");
        var file = fs.createWriteStream("lcov.zip");
        var req = http.request(options, function (res) {
            res.pipe(file);
            file.on("finish", function() {
                console.log("Zip downloaded");
                process.exit();
            });
        });
        req.end();
    });
}, {
    async: true
});

desc("Start Selendroid server")
task("start-selendroid-server", function() {
    var selendroid = "selendroid-standalone-0.11.0-with-dependencies.jar";
    var apk = "platforms/android/ant-build/HybridSeleniumTest-debug.apk";

    if (!fs.existsSync(apk)) {
        fail("APK doesn't exist, did you run `cordova build android`?");
    }

    if (!process.env.ANDROID_HOME) {
        fail("ANDROID_HOME environment not set");
    }

    var p = childProcess.spawn("java", ["-jar", selendroid, "-app", apk], {
        stdio: "inherit"
    });
}, {
    async: true
});
