// Ejecuta un callback con 2s de demora
/// INFO: https://platzi.com/clases/3175-asincronismo-js/53956-playgrounds-debes-ejecutar-un-callback-son-2s-de-d/

export function execCallback(callback) {
    window.setTimeout(callback, 2000)
}