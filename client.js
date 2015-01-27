var http = require('http');

var options = {
  host: 'philoticconnection.com',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
  if (res.statusCode  === 200) {
    console.log("The site is up!");
  }
  else {
    console.log("The site is down!");
  }
}).on('error', function(e) {
  console.log("There was an error: " + e.message);
});


