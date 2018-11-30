{
    const EventEmitter = require("events")

    class Gym extends EventEmitter {
        constructor() {
            super()
            console.log('New Gym')
            setInterval(() => { this.emit('go') }, 1000)
        }
    }

    let g = new Gym();
    g.on("go", () => { 
        console.log("Athlete is working out!") 
    })
}