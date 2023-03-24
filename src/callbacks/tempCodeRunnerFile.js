setTimeout(function() {
    console.log("Hola JS");
}, 4000)

function greeting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(greeting, 2000, "Nestor" )