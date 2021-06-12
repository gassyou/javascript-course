let parentArray = [];

let f = (a,b)=>{
    return b - a; 
};


for (let i = 0; i < 5 ; i ++) {
    let childArray = [];
    for (let j = 0; j < 8; j ++) {
        childArray.push( Math.round(Math.random()*100));
    }
    childArray.sort((a,b)=>f(a,b));

    parentArray.push(childArray);
}

parentArray.sort((a,b)=>{
    let sumOfA = sum(a);
    let sumOfB = sum(b);
    return sumOfA - sumOfB;
    
});



let a ;
a = 0 ;
function sum(arr) {
    let sum = 0;
    arr.forEach((i)=>{sum += i;});
    return sum;
}



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


const sum2 = function (a2,b2) {
    console.log(a2);
    return a2 + b2;
}

// function sum3(a,b) {
//     a + b;
//     console.log("no return");
// }

let r1 = sum2(10,20);
console.log(r1);
// let r2 = sum3(39,50);
// console.log(r1);
// console.log(r2);




let mycar = {make: 'Honda', model: 'Accord', year: 1998};
myFunc(mycar);
console.log(mycar);

function myFunc(theObject) {
    theObject.make = 'Toyota';
}

let array1 = [1,2,3];
let array2 = [33,44,2,3];




add(array1);
console.log(add());

function add(a=[5]) {
    a.push(4);
    return a;
} 

// let array2 = add(array1);
console.log(array1);
console.log(array2);
// console.log(array2);


function log(f) {
    console.log( f(5,6) );
}

const fun = (a,b)=>{
    return a + b;
};

log(fun);