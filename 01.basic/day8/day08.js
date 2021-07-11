// setTimeout(() => {
//     console.log("aaaa");
// }, 5000);
// console.log("bbbb");

// setInterval(() => {
//     console.log("aaaa");
// }, 5000);
// console.log("bbbb");


// c = new Promise((resolve, reject) => {
//     throw new Error('aa');
// }).then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })


let a = Promise.resolve("aaaa");
let b = Promise.reject("bbbb");
let c = Promise.resolve("cccc");

Promise.race([a,b,c]).then((value)=>{
    console.log(value);
},(v1)=>{
    console.log(v1);
})
