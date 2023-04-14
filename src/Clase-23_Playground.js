//* Crea una utilidad para hacer peticiones
/// INFO: https://platzi.com/clases/3175-asincronismo-js/53934-playground-crea-una-utilidad-para-hacer-peticiones/

import fetch from "node-fetch";

// ? Mi solucion
async function runCode(url) {  
    const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    const result = regexp.test(url);
    if (result === true) {
        console.log("la url es correcta");
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            return data;
        } catch {
            throw new Error('Something was wrong');
        }
    } else {
        throw new Error('Invalid URL');
    }

}
await runCode('https://domain-a.com/api-1') // 'Something was wrong'
await runCode('https://api.escuelajs.co/api/v1/categories')
await runCode('https://api.escuelajs.co/api/v1/products/200')
await runCode('----') // 'Invalid URL'

// ? Solucion sugerida
async function Code(url) {
    try {
        new URL(url);
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        if (error.message === "Failed to construct 'URL': Invalid URL"){
        throw new Error('Invalid URL');
        } else {
            throw new Error('Something was wrong');
        }
    }
}   