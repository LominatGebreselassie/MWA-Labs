const{of} = require('rxjs');
const{map, filter}= require('rxjs/operators');
of(1,2,3)
.pipe(
    map((n)=>n+3), 
    filter((n)=>n>2)
    )
.subscribe(
    (x)=>console.log(x),
    null,
    ()=>console.log('done'))