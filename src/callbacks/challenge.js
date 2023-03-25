const XMLHttpRequest = require("xmlhttprequest");
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.resposeText))
            }
        } else{
            const error = new Error( "Error" + urlApi);
            return callback(error, null)
        }
    }
    xhttp.send();
}

//? Otra forma de hacerlo
// fuente: https://platzi.com/comentario/3885400/
const XMLHttpRequest = require('XMLHttpRequest');
const API2 = 'https://api.escuelajs.co/api/v1/products';
const DONE = 4;
const OK = 200;

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (e) {
        if (xhttp.readyState === DONE && xhttp.status === OK) {
            callback(null, JSON.parse(xhttp.responseText));
        } else {
            const error = new Error('error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}