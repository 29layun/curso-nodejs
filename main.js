//const web = require('./module/myModule')

//console.log(web)


//Mandar a llamar ek modulo (objeto) completo
/*
const math = require('./math/index')

console.log(math)
*/

//Mandat a llamar al modulo (objeto) por partes 
const math = require('./math/index')

console.log(math.add(10, 20))
console.log(math.subtract(10, 20))
console.log(math.multiply(10, 20))
console.log(math.divide(10, 20))
