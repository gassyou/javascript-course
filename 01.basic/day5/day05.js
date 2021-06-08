let arr1=['a','b','c'];
let arr2= new Array('a','b','c');
let arr3= Array('a','b','c');
console.log(arr1[2]);
console.log(arr2[2]);
console.log(arr3[2]);

let arr4=[1];
let arr5= new Array(1,5);
let arr6= Array(1,5);
console.log(arr4[0]);
console.log(arr5[0]);
console.log(arr6[0]);


let arr7 = [];
// arr7.length = 10;
arr7[15] = "rrrr";
console.log(arr7[15]);
console.log(arr7[14]);
console.log(arr7.length);


let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

// cats.length = 2
console.log(cats)  // ログに "Dusty, Misty"  - Twiggy は削除される

// cats.length = 0
console.log(cats)  // ログに [ ] 、配列 cats は空になる

cats.length = 3
console.log(cats[0]) 
cats['name']="Mars";

console.log("---");
for(let c in cats) {
    console.log(c);
}

['a','b','c'].forEach(element => {

    if(element==='b') {
        return;
    }
    console.log(element);
});

console.log(['a',1,3,'b'].concat(['cc','dd']));


console.log("---");
let a = [10,20,30];
let total = a.reduce((accumulator,current)=>{
  return accumulator - current;
},100);
console.log(total);

console.log("---");
let myMap = new Map();
myMap.set('name','Mars');
myMap.set('name','Mars1');
myMap.set('name','Mars12');

for (let [key, value] of myMap) {
    console.log(key + ' goes ' + value);
}

console.log("---");
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');
mySet.add(1);
console.log(mySet.size); // 2


mySet.has(1); // true
mySet.delete('foo');
mySet.clear()


for (let item of mySet) console.log(item);

let as = "ooo";
let aa = as.split("o");
console.log(aa);
console.log("----");

let now = new Date();



now.setDate(now.getDate()+10);
console.log(now);


let str = "012345o7o9oB DOF";

let strArray = str.split("o");

let indexs = [];
let indexOfBeforeO = 0;
strArray.forEach(x=>{
    let wordLength = x.length;
    let indexOfCurrentO = indexOfBeforeO + wordLength + 1;
    indexOfBeforeO = indexOfCurrentO;
    indexs.push(indexOfCurrentO);
    console.log(indexOfCurrentO);
});

let total1 = 0;
indexs.forEach(x=>{
    total1 = total1 + x;
});

console.log(total1);



let aaa = ['a','c','e','d','f','b','f','e'];

console.log(aaa.sort());


let aaa1 = [6,9,2,10,3,5,111,203];

// console.log(aaa1.sort());

console.log(aaa1.indexOf(10));



// let bbb = aaa.splice(2,1,"aaa");
// console.log(aaa);


 
// let myArray = new Array('1', '2', '3', '4', '5');
//  myArray.splice(1, 3, 'a', 'b', 'c', 'd')
//  console.log(myArray);



