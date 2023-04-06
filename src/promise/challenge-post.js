import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//? A fuction all in one
//! not works

// function fetchData(urlApi, data, metodo) {
//     const response = fetch(urlApi, {
//         method: metodo,
//         mode: 'cors',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return response;
// }
// fetchData(`${API}/products/`, "", 'delete')
//     .then(response => response.json())
//     .then(response => console.log(response))


//! POST
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
//* first info
const data1 = {
    "title": "Master Chief",
    "price": 117,
    "description": "The best Spartan",
    "categoryId": 1,
    "images": [
        "https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png"
    ]
}
postData(`${API}/products`, data1)
    .then(response => response.json())
    .then(data1 => console.log(data1))

//* 2nd info
const data2 = {
    "title": "Cortana",
    "price": 100,
    "description": "The best AI",
    "categoryId": 1,
    "images": [
        "https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png"
    ]
}
postData(`${API}/products`, data2)
    .then(response => response.json())
    .then(data2 => console.log(data2))

//! PUT
function putData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
const idData1 = 283;
const data1Put = {
    "title": "Master Chief best known as 'Demon'",
    "description": "The best Spartan of all time",
}
putData(`${API}/products/${idData1}`, data1Put)
    .then(response => response.json())
    .then(data1Put => console.log(data1Put))

//! DElETE
function deleteData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
const idData2 = 285
deleteData(`${API}/products/${idData2}`)
    .then(response => response.json())
    .then(response => console.log(response))
