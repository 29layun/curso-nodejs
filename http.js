const http = require('http')

const server = http.createServer(function (request, response) {
    
    if (request.url==='/') {
        response.write('Welcome to the server')
        return response.end()    
    }
    
    if (request.url==='/about') {
        response.write('Aserca de ')
        return response.end()    
    }
        
    console.log(request.url)
    response.write(`
        <h1>Not found </h1>
        <p>Esta pagina no se encontro </p>
        <a href="/">Regresar a la pagina principal </a>
    
    `)
    response.end()
});
server.listen(8080)  // funcion utilizando el protocolo http 'se especifica el puertos "8080"'

console.log('Servidor escuchando en el puerto 8080')