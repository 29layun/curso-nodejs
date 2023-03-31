const fs = require('fs')


//Codigo sincrono 
/*
const first = fs.readFileSync('./data/first.txt', 'utf-8') // Manda a llamar el archivo 'first.txt' y lo convierte a string con 'utf-8'
const second = fs.readFileSync('./data/second.txt') // Manda a llamar el archivo 'second.txt' 

console.log(first)
console.log(second.toString()) // El metodo 'toString()' convierte los datos del archivo 'second.txt' a string

fs.writeFileSync('./data/third.txt', 'contenido del tercer archivo') //Con el metodo 'writeFileSync' crea un archivo y le ingresa datos 

// Para insertar datos en un archivo existente 
const title = ' este contenido se inserto'
fs.writeFileSync('./data/fourth.txt', title, {
    flag: 'a'    
}) //Con el metodo 'writeFileSync' crea un archivo y le ingresa datos con la variable 'title' o puede ingresar datos normales como el ejemploanterior con solo comillas ''
*/

//codigo Asincrono 

fs.readFile('./data/first.txt', 'utf-8', function (error, data) {
    
    if (error) {
        console.log(error)    
    }
    
    console.log(data)
        
    fs.readFile('./data/second.txt', 'utf-8', function (error, data) {
        
        if (error) {
            console.log(error)    
        }
        
        console.log(data)
        
                
        fs.writeFile('./data/newfile.txt', 'archivo creado desde fs', function (error, data) {
            
            if (error) {
                console.log(error)    
            }
            
            console.log(data)
            
        })
    })  
})

