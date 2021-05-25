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
