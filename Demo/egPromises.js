var studied=true;
var willpassTheExam= function(){
    return new Promise(function(resolve,reject){
        if(studied)
        resolve('pass');
        else 
        reject(new Error('Fail'));
    })
};
var askMe = function(){
    willpassTheExam().then(function(result){
        console.log(result);
    }).catch(function(error){console.log(error);
    });
};
askMe();
console.log('Finish');
