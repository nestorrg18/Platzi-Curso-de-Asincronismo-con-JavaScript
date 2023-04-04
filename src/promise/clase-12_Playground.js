//* Crea una función de delay que soporte asincronismo
// info: https://platzi.com/clases/3175-asincronismo-js/53932-playground-crea-una-funcion-de-delay-que-soporte-a/

//! Esta es la Buena.

function delay(time, message){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}

delay(3000, "Hello 3 seconds after").then((message) => console.log(message))

//? Otra version con validacion
// fuente: https://platzi.com/comentario/4105093/
function delay(time, message) {
    const pro = new Promise(function (resolve, reject) {
        if (time >= 0) {
        setTimeout(() => {
            resolve(message)
        }, time)
        } else {
        reject("Time cannot be negative")
        }
    })
    return pro
}