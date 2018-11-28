const add=(a,b)=>{
    return setTimeout(()=>{
        console.log(a+b)});
    }
    console.log('start');
    const A = add(1,2);
    const B = add(2,3);
    const C = add(3,4);
    console.log('end');