// Modulos importantes de path

 const path = require('path')
 
 // windows 
 
 /*
    c:\\Users\\miguel\\Desktop
 */
 
 // Linux
 
 /*
    home/miguel/desktop 
 */
 
 // console.log(path.join('/public','dir', 'main.css'))  //Metodo de "join" para unir una ruta y nos de una ruta valida en el S.O. que se utiliza
const filePath = path.join('/public','dir', 'main.css')

console.log(filePath)   
console.log(path.basename(filePath))   //Devuelve el archivo base 'main.css' de la ruta 
console.log(path.dirname(filePath))   //Devuelve solo la ruta sin el archivo 'main.css'
console.log(path.parse(filePath))   //Trae la ruta como un objeto
console.log(path.resolve('dist'))  //Resuelve la ruta de donde se entruenta el proyecto y agrega '/dist'


