const os= require('os');
var totalMos=os.totalmem();
var freememory= os.freemem;

console.log("Total memory: "+totalMos )
console.log("free memory: "+freememory )