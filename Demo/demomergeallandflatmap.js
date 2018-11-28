const{interval } = rxjs;
const{map , flatMap, mergeAll, take} = rxjs.operators;

interval(100).pipe(
    take(10),
    flatMap(x=>of(1,2,3)),
).subscribe(x=>console.log(x));