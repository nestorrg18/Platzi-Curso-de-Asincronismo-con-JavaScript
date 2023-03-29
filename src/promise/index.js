// const promise = new Promise(function (resolve, reject) {
//     resolve('Hey')
// });

const cows = 9;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve(`We have ${cows} cows in the farm.`);
    } else{
        reject(`We only have ${cows}, we need more`);
    }
})

countCows.then((result)=> {
    console.log(result);
}).catch((error)=> {
    console.log(error);
}).finally(()=> console.log("Finally"));