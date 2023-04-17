//const {readFile} = require("fs")
const {readFile} = require("fs/promises");
//codigo asincrono
/*
readFile('./data/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
*/
//convertir el codigo a promesa 
/*

const getText = (pathFile) => {
        return new Promise(function (resolve, reject) {
            // contnido 
            readFile(pathFile, 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
        })
    })
}
*/
/*
getText('./data/fourth.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/first.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
*/    
// se utiliza await para codigo asincrono
/*
async function read() {
    try {
        const result = await getText('./data/first.txt');
        const result2 = await getText('./data/second.txt');
        const result3 = await getText('./data/third.txt');
        const result4 = await getText('./data/fourth.txt');
        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error);
    }
}
read()

*/

// Codigo de promise asicncrono reduccido, hace la misma funcion que el codigo de arriba de la linea 12 a la linea 51
/* 
const {promisify} = require('util')

const readFilePromise = promisify(readFile)

async function read() {
    try {
        const result = await readFilePromise('./data/first.txt', 'utf-8');
        const result2 = await readFilePromise('./data/second.txt', 'utf-8');
        const result3 = await readFilePromise('./data/third.txt', 'utf-8');
        const result4 = await readFilePromise('./data/fourth.txt', 'utf-8');
        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error);
    }
}
read()
*/
//Para reducir codigo de promesa se utiliza las siguientes lineas de comandos, linea de codigo 2 y linea de codigo 79-93 

async function read() {
    try {
        const result = await readFile('./data/first.txt', 'utf-8');
        const result2 = await readFile('./data/second.txt', 'utf-8');
        const result3 = await readFile('./data/third.txt', 'utf-8');
        const result4 = await readFile('./data/fourth.txt', 'utf-8');
        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error);
    }
}
read()