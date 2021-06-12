const result = new Set();

for(let i=0;i<20;i++) {
    let n = Math.floor(Math.random() * 20) ;
    console.log(n);
    result.add(n);
}
console.log("---");
console.log(result.size);