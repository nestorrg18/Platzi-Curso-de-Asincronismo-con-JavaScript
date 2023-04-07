import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}

const anotherFunction = async () => {
    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[201].id}`);
        const category = await fetchData(`${API}/categories/${product.category.id}`);

        console.log(products);
        console.log(product);
        console.log(product.title);
        console.log(product.id);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API)