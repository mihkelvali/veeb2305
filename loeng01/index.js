var http = require('http');

let counter = 0;
http.createServer(function (req, res) {
  counter++;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello Mihkel!, ${counter}`);
}).listen(8080);
