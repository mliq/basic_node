var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write('Hello!');
    response.end();
}).listen(8000);

console.log("Listening on port 8000");