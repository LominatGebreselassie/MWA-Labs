const Eventemitter= require('events');
const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged',(arg)=>{
    console.log('LIstener called',arg);
});


logger.log('message');