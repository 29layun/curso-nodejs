//Uso de http con el modulo stream 
const http = require('http')

const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    
    const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
    })
    
    fileStream.on('data', (chunk) => {  
        fileStream.pipe(res)  // codigo para ir imprimiendo porcion del archivo por partes
    })
    
    fileStream.on('error', error => {
        console.log(error) // Codigo para nandar el error si es que llega a ocurrir 
    })

})
server.listen(8080)
console.log(`setver on port ${8080}`) // servidor escuchando en el puerto 8080