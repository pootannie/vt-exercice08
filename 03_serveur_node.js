var http = require("http"); //importe le module du serveur http

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello World</h1>");
  response.write("<p>Hello World</p>");
  response.end();
}).listen(8888);