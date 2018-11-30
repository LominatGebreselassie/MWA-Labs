var http = require('http');
function onRequest(req,resp){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.write('Hello-world');
    resp.end();
}
http.createServer(onRequest).listen(8000);