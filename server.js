var http = require('http');
http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello World, I am programming in Node.JS!\n');
  res.writeHead(301, {
  	'Location': 'http://philoticconnection.com/'
  });
  res.end();
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
