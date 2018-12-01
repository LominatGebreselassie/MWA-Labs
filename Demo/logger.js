const Eventemitter= require('events');
// const emitter= new Eventemitter();

var url ='http://mylogger.io/log';
class Logger extends Eventemitter{
 log(message){
    console.log(message);

this.emit('messageLogged', {id:1,url:'http://'});
}
}
module.exports=Logger;