// setTimeout(() => {
//     console.log("aaaa");
// }, 5000);
// console.log("bbbb");

// setInterval(() => {
//     console.log("aaaa");
// }, 5000);
// console.log("bbbb");


c = new Promise((resolve, reject) => {
    throw new Error('aa');
}).then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})

