{
    const http = require('http')
    const url = require('url')
    const { fork } = require('child_process')
    http.createServer((req, res) => {

        const fileName = url.parse(req.url, true).query.url;
        if (fileName) {
            const childProcess = fork('readFile.js')
            console.log('send filename to child process')
            childProcess.send(fileName)
            childProcess.on('message', file => {
                console.log('file readed')
                res.end(file)
            })
        } else {
            res.end('file name is empty!')
        }
    }).listen(3000, () => {
        console.log("Server Started at 3000")
    })
}