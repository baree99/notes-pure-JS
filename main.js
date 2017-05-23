var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "./public");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000, function() {
  console.log('Server started on port 3000')
});
