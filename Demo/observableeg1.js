const{ Observable} = require('rxjs');
const obs$= Observable.create(function(observer){
    observer.next('cs572');
    setTimeout(()=>{
        observer.complete();},3000);
    });

    const subscription = obs$.subscribe(
        function(x){
            console.log(`value: ${x}`);
        },
        function(err){
            console.error(err);
        },
        function(){
            console.info('Done');
        });