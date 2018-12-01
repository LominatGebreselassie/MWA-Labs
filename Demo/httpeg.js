const http= require('http');
const server=http.createServer((req,resp)=>{
    if(req.url === '/'){
        resp.write('hello world');
        resp.end();
    }
    if(req.url == '/api/courses'){
        resp.write(JSON.stringify([1,2,3]));
        resp.end();
    }
}).listen(5000);
console.log('listening on port 5000...');

