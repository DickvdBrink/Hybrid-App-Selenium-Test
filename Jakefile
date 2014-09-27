var express = require("express"),
    im = require("istanbul-middleware");

desc("Start coverage server")
task("start-server", function() {
    var app = express();
    app.use('/coverage', im.createHandler());
    app.listen(4488);
}, {
    async: true
});