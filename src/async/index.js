const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ?setTimeout(() => resolve("Async!!"), 5000)
        :reject(new Error("Error!"))
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
}

console.log("Before");
anotherFn();
console.log("After");

//? Mozilla example
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}

asyncCall();