var express = require('express');

var app = express.createServer(express.logger());
var text=fs.readFileSync("index.html","utf8");
//var buffer=new Buffer(Buffer.byteLength(text));
//var outstring=buffer.toString
app.get('/', function(request, response) {
  response.send("TESTtext");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
