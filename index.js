var http = require('http');
var fs=require('fs');

function send404Response(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

var server = http.createServer(function (req, res) {
   console.log('request starting...');
   if (req.method === 'GET' && req.url === '/'){
         res.writeHead(200, {'Content-Type': 'text/html'});
         fs.createReadStream('./index.html').pipe(res);
    }
    else{
        send404Response(res);
    }

});
server.listen(3005);
console.log('Server running at http://127.0.0.1:3005/');