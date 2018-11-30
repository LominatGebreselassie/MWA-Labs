var fs = require('fs');
fs.readFile(path.join(_dirname, 'greet.txt'),
'utf8',function(err,data){
    setTimeout(()=>{
        console.log('setTimeout');},0);
    setImmedate(()=>{
        console.log('immediate');});
    process.nextTick(()=>
    console.log('nextTick'));
});