# JavaScript参照

### 変数の初期化

```js
const b = 10;

var c = 10;

let foo = [1,2,3];
let one = arr[0];
let two = arr[1];
let three = arr[2];

// 或いは下記の書き方
let [one, two, three] = foo;

// 条件による
let result = b === c ? true : false;
```


### if...else

```js
let a;
// 条件の判断
if(a==='hello'){
  // 条件成立の場合、何か処理する
	console.log('你好');

}else{
  // 条件不成立の場合、何か処理する
	console.log('晚安');
}
```

### switch

ある変数の値により、処理が違い場合使います

```js
 var i = 10;
 switch (i) {
    case 9:
       i = i + 1;
       break;
    case 10:
       i = i + 2;
       break;
    case 100:
       i = i + 100;
       break;
}
console.log(i);
```

### for

循環の回数が特別の変数でコントロールする

```js
var x=10;
for(var y=1;　y<x;　y++){
	console.log(y);
}
```

### do...while

循環の回数が特別の変数でコントロールする。`while`条件を成立する場合、実行する。

```js
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

```

### while语句

循環の回数が特別の変数でコントロールする。`while`条件を成立する場合、実行する。

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n=n, x=x);
}

// 以下の循環処理は、止まらないです。
while (true) {
  console.log("Hello, world");
}

```

### break

循環の処理を終了する

```js
var x=10;
for(var y=1;y<x;y++){
	console.log(y);
    break;
}

```

### continue

循環処理を中止する。循環処理中に`continue`以下のソースコードが実行しない。

```js
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12


var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
     // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
```

### for...in

対象中のすべて属性を列挙する

```js
let people = {
    name:'小红',
    age : 15,   
}
for(let key in people ){
    console.log(key+':'+people[key]);
}
//name:小红
//age:15
```

### for...of

配列中の各要素を列挙する

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // Output: "0", "1", "2", "foo"
}


for (let i of arr) {
   console.log(i); // Output: "3", "5", "7"
}

```

### 関数

```js
function sum(num1,num2) {
  return num1 + num2;
}

let result = sum(10 + 11);
console.log(result);
console.log(sum(20+15));
```

### 関数を変数に設定する

```js
const square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```

### =>関数

```js
const square = (number) => { return number * number; };
var x = square(4); // x gets the value 16
```

### 関数自体から呼び出し

```js

var calc = function (x) {  
    if (x === 1) {  
        return 1;  
    } else {  
        return x * calc(x - 1);  
    }  
}; 
calc(10);

```

### 対象

```js
function Car(e,w) {
   this.engine = e;
   this.wheel = w;
   this.run = function() {
     console.log(`speeds:${this.engine * this.wheel}`);
   }
}

let Honda = new Car(1.8, 4);
Honda.run();
let toyota= new Car(2, 4);
toyota.wheel = 6;toyota.run();
```


### 対象のコピー

Object.assign(目標,元データ)

```js

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
// returnedTargetとtarget: { a: 1, b: 4, c: 5 }
```

### JSON文字列から対象に変換する

JSON.parse(文字列)

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
```

### 対象をJSON文字列に変換する

JSON.stringify(対象)

```js
let str1 = JSON.stringify({ x: 5, y: 6 });// str1: "{"x":5,"y":6}"
let str2 = JSON.stringify([new Number(3), new String('false'), false]); // str2: "[3,"false",false]"
```

### 文字列
#### 文字列から指定位置の文字を返す
`charAt(index)`
```js
let msg2 = 'あいう𩸽ういあ';
let someChar = msg2.charAt(2);  // someChar : う
```

#### 指定文字の所在Indexを返す
`indexOf(文字)`
```js
let msg2 = 'あいう𩸽ういあ';
let charIndex = msg2.indexOf("う");  // charIndex : 2
```

#### 文字列検索
`includes(文字列)`
```js
var str = "Hello world, welcome to the Runoob。";
var n = str.includes("world"); // n: true
```

#### 文字列分割
`split()`
```js
let str = "aaa,bb,cc,dd,eee";
let strArray = str.split(","); 
//strArray: [aaa,bb,cc,dd,eee]
```

#### 文字列一部抽出
`slice(beginIndex,endIndex)`
```js
var str="Hello happy world!";
var subStr = str.slice(6,11);
// subStr: happy

```

`substring(indexStart,indexEnd)`
```js
var str = "Hello world!";
var subStr = str.substring(3,7);
// subStr: lo w
```

`substr(start[, length])`
```js
var str = "Hello world!";
var subStr = str.substr(3,7);
// subStr: lo worl
```

### 配列

#### 配列の列挙、循環処理

```js
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

```js
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
```
#### 配列の結合

`concat()` 

```js
var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```
#### 配列中の各要素を文字列に結合する

`join(deliminator = ',')`

```js
var myArray = new Array("Wind", "Rain", "Fire");
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```
#### 配列の末に、要素を追加する

`push()`

```js
var myArray = new Array("1", "2");
myArray.push("3"); // myArray is now ["1", "2", "3"]
```
#### 配列の末の要素を除く

`pop()`
```js
var myArray = new Array("1", "2", "3");
var last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```
#### 配列の先頭の要素を除く

`shift()`

```js
var myArray = new Array ("1", "2", "3");
var first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```
#### 配列の先頭に要素を追加する

`unshift()`

```js
var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
```

#### 配列から一部を取得する

`slice(start_index, upto_index)`

```js
var myArray = new Array ("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // returning [ "b", "c", "d"]
```

#### 配列に要素を插入する
`splice(index, count_to_remove, addElement1, addElement2, ...)`

```js
var myArray = new Array ("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d");
```

#### 配列の順番を反転する
`reverse()`
```js
var myArray = new Array ("1", "2", "3");
myArray.reverse();
```

#### 配列をソートする
`sort()`

```js
var myArray = new Array("Wind", "Rain", "Fire");
myArray.sort();
```

```js
var sortFn = function(a, b){
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn);
```

#### 配列から要素のIndexを検索する
`indexOf(searchElement[, fromIndex\])`

```js
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
```

#### 配列から要素を処理して、新しい配列を返す
`map()`
```js
let a1 = ['a', 'b', 'c'];
let a2 = a1.map(function(item) { return item.toUpperCase() });
// a2: ['A', 'B', 'C']

```


### Map

```js
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### SET

```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2
for (let item of mySet) {
  console.log(item);
}
mySet.clear();

```


### 使用Promise

```js
new Promise((resolve, reject) => {
    console.log('start');

    resolve();
})
.then(() => {
    console.log('run');
})
.catch(() => {
    console.log('error');
})
.then(() => {
    console.log('run');
});
```
