function sum(n1, n2){
    return n1 +n2;
}

function calc(n1, n2, callback){
    return callback(n1, n2);
}
console.log(calc(2, 2, sum));

///

setTimeout(function() {
    console.log("Hola JS");
}, 4000)

function greeting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(greeting, 2000, "Nestor" )

/// Ejemplo Mozilla: Usar en el navegador

function saludar(nombre) {
    alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}

procesarEntradaUsuario(saludar);