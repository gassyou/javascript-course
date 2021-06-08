let parentArray = [];

for (let i = 0; i < 5 ; i ++) {
    let childArray = [];
    for (let j = 0; j < 8; j ++) {
        childArray.push( Math.round(Math.random()*100));
    }
    childArray.sort((a,b)=>{
        return b - a;
    });

    parentArray.push(childArray);
}

parentArray.sort((a,b)=>{

    let sumOfA = 0;
    a.forEach((i)=>{sumOfA += i;});

    let sumOfB = 0;
    b.forEach((i)=>{sumOfB += i;});

    return sumOfA - sumOfB;
    
});

// for Testing
console.log(parentArray);
parentArray.forEach((itme)=>{
    let sum = 0;
    itme.forEach((i)=>{sum += i;});

    console.log("------------");
    console.log(itme);
    console.log(sum);
})

// https://qiita.com/lrururu/items/cc36037e8b221faf4455
// https://www.sejuku.net/blog/62904