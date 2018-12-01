const Eventemitter= require('events');
const emitter= new Eventemitter();
//register a listener
emitter.on('messageLogged',(arg)=> {
    console.log('Lisstener called', arg);
})
//raise an event 
emitter.emit('messgaeLogged',{id:1, url:'http://'});