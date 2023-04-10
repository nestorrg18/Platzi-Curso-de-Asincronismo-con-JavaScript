import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}
async function* iterate() {
    try {
        const products = await fetchData(`${API}/products`);
        yield "Productos cargados"

        const product = await fetchData(`${API}/products/${products[150].id}`);
        yield product.title

        const category = await fetchData(`${API}/categories/${product.category.id}`);
        yield category.name
    } catch (error) {
        console.error(error);
    }
}

const product = iterate();
console.log(await product.next()); //  { value: 'Productos cargados', done: false }
console.log(await product.next()); //  { value: 'Tasty Plastic Car', done: false }
console.log(await product.next()); // { value: 'Clothes', done: false }
console.log(await product.next()); // { value: undefined, done: true }
