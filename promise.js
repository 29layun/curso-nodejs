const {readFile} = require('fs')
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
/*
getText('./data/fourth.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/first.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
*/    
// se utiliza await para codigo asincrono
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