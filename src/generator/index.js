function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3
console.log(g.next().value); // undefined

function* iterator(array) {
    for (const value of array) {
        yield value
    }
}

const it = iterator(['Juan', 'Pedro', 'Mateo', 'Lucas'])
console.log(it.next().value); // Juan
console.log(it.next().value); // Pedro
console.log(it.next().value); // Mateo
console.log(it.next().value); // Lucas
console.log(it.next().value); // undefined