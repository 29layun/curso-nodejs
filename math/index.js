//Formas comunes de importar 
/*
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

*/
//Para visualizar en consola
/* 
console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(divide(10, 20))
*/

//Exportar por modulos de manera comun
/*
module.exports = {
    add,
    subtract,
    multiply,
    divide
}
*/

//Forma de exportar modulos actualizado
//Se puede exportar de manera individual cada funcion con agregandole export como en las funciones siguientes 
export function add(x, y) {
    // contenido de la funcion sumar
    return x + y
}

export function subtract(x, y) {
    // contenido de la funcion restar
    return x - y
}

export function multiply(x, y) {
    // contenido de la funcion multiplicar
    return x * y
}

export function divide(x, y) {
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

//Exportar por modulos de manera actualizada
//Para exportar las funciones de manera general(grupal) se usa el siguiente comando
export default {
    add,
    subtract,
    multiply,
    divide
}



