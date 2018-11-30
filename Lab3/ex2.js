const fs = require('fs');
const http = require('http');
//with out stream
const imag = fs.readFileSync('img.jpg');

http.createServer(function(req,resp){
resp.end(imag);
}).listen(8081,()=>{
    console.log('start server on port 8081')
})

//with streams

http.createServer(function(req,resp){
    resp.setHeader('content-type','image/jpg');
   fs.createReadStream('img.jpg').pipe(resp);

}).listen(8080,()=>{console.log('start server on port 8080')})