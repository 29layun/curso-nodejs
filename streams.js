/*
const {writeFile} = require('fs/promises')

const createbigfile = async () => {
    await writeFile('./data/bigfile.txt', 'hello world'.repeat(10000)) // se usa la funcion repeat(x) para repetir un texto las veces que sean 
}    

createbigfile()

*/

const {createReadStream}= require('fs')

const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8'
})

stream.on('data', (chunk) => {  
    console.log(chunk)  // codigo para ir imprimiendo porcion del archivo por partes
})

stream.on('end', () => {
    console.log('Ya termine de leer el archivo') //Codigo para mandar un mensaje cuando termine de leer el archivo
})    

stream.on('error', (error) => {
    console.log(error) // Codigo para nandar el error si es que llega a ocurrir 
})

