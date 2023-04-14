const http = require('http')

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.write('welcome to the server')
        return res.end()
    }
    
    if (req.url === '/about') {
        // codigo bloqueante 
        /*for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i)
        }
        */
        
        return res.end("About page")
    }
    
    res.end('not found')
})

server.listen(4000)
console.log('Server on port 4000')