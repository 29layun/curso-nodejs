function add(x, y) {
    // contenido de la funcion sumar
    return x + y
}

function subtract(x, y) {
    // contenido de la funcion restar
    return x - y
}

function multiply(x, y) {
    // contenido de la funcion multiplicar
    return x * y
}

function divide(x, y) {
    // contenido de la funcion dividir
    return x / y
}

//Para visualizar en consola
/* 
console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(divide(10, 20))
*/

//Exportar por modulos

module.exports = {
    add,
    subtract,
    multiply,
    divide
}