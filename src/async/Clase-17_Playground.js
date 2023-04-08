//* Captura el error de una petición
/// INFO: https://platzi.com/clases/3175-asincronismo-js/53933-playground-captura-el-error-de-una-peticion/
import fetch from 'node-fetch';

async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
        await fetch(url)
    } catch (error) {
        throw new Error('API Not Found'); 
    }
}

runCode();