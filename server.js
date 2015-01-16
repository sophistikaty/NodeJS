var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(201, {'Content-Type': 'text/plain'});
  res.end('Hello World, I am programming in Node.JS!\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
