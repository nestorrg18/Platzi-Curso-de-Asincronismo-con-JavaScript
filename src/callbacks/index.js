function sum(n1, n2){
    return n1 + n2;
}
function rest(n1, n2){
    return n1 - n2;
}
function mult(n1, n2){
    return n1 * n2;
}
function div(n1, n2){
    return n1 / n2;
}

function calc(n1, n2, callback){
    console.log(callback(n1, n2));
}
calc(5, 5, sum);
calc(5, 5, rest);
calc(5, 5, mult);
calc(5, 5, div);

///

setTimeout(function() {
    console.log("Hola JS");
}, 4000)

function greeting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(greeting, 2000, "Nestor Rios" )

/// Ejemplo Mozilla: Usar en el navegador

function saludar(nombre) {
    alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}

procesarEntradaUsuario(saludar);