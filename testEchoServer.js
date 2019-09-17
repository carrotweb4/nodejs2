var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'content-Type' : 'text/plain'});
  res.write("hello testNodeServer");
  res.end();
}).listen(9000);
console.log("Server running at http://localhost:9000/");
