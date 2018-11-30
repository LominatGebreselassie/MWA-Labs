var everythingworks=true;
var giveMePiza= function(){
    return new Promise(function(resolve,reject){
        if(everythingworks){
            resolve("This is true");
        }else{
            reject("this is false");
        }
    })
}
giveMePiza().then(data=>console.log(data))
.catch(err=>console.error(err));
console.log("I will run immedately after calling  giveMePizza");
