
// // let テスト="aaa";
// // console.log(テスト);

// // let test = 0;
// // let _test = 0;
// // let $test = 0;
// // let test11 = 0

// // test12=12;
// // const test13 = "hello"; 
// // console.log(test13);
// // console.log(test12);

// // let myArray = [];
// // console.log(myArray[0]); 

// // if(!test) {
// //     console.log("aa");
// // }

// // console.log(parseInt("0100",2));
// // console.log(parseInt("0100",10));
// // console.log(parseInt("0100",8));
// // console.log(parseFloat("10"));
// // console.log(parseFloat("10.33"));
// // console.log(parseFloat("34 45 66"));
// // console.log(parseFloat(" 60 "));
// // console.log(parseFloat("40 years"));
// // console.log(parseFloat("He was 40"));
// // console.log(parseInt(10n,10));


// // var unusualPropertyNames = {
// //     '': '空文字列',
// //     '!': 'バン！'
// //   }
// // //   console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string が発生
// //   console.log(unusualPropertyNames['']);  // 空文字列
// // //   console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token ! が発生
// //   console.log(unusualPropertyNames['!']); // バン！

// //   console.log(2**3);
// //   console.log(2<<3);

// //   // 配列
// // var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
// // 0 in trees;        // true を返す
// // 3 in trees;        // true を返す
// // 6 in trees;        // false を返す
// // 'bay' in trees;    // false を返す（インデックスの指す値ではなく、
// //                    // インデックスの数字を指定しなければならない）
// // 'length' in trees; // true を返す（length は Array のプロパティ）

// // // 定義済みオブジェクト
// // 'PI' in Math;          // true を返す
// // var myString = new String('coral');
// // 'length' in myString;  // true を返す

// // // ユーザー定義オブジェクト
// // var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
// // 'make' in mycar;  // returns true
// // 'model' in mycar; // returns true

// // console.log(Number.MAX_SAFE_INTEGER);
// let test = BigInt("9007199254740991");
// console.log(test+1n);

// console.log(10n === 10); // → false
// console.log(10n == 10); // → true

// //  console.log(+test);

// console.log(+"111");
// console.log(parseFloat("111.111"))

// let t = "aaaaaaaaaa";
// console.log(t.length);
// console.log(`ssssss${t}ssssss`);
// console.log("ssssss"+t+"ssssss");

// let name = { firstName: 'zheng', secondName: 'xiangfei' };

// console.log(name.firstName);
// console.log(name.secondName);
// console.log(name["firstName"]);
// name.firstName="bbb";
// console.log(name.firstName);


// function plus(a,b) {
//     return a + b;
// }

// let result = plus(3,2);
// console.log(result);


// let f = {};
// let search = "apple";

// let searchResults = searchPrice(seach);
// console.log(searchResults);

// function searchPrice(seach) {
// 1111
// }



// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);




// let str = "[hello world]";
// console.log(str.length);


// let age = 1;

// let result = age > 18 ? "aaa" : age < 10 ? "cc": "dd";



// console.log(result);

// let arr = ['wang','li','zhang'];
// arr.foo = 'hello';

// let obj = {name1: 'test', name2:"saaa"};

// for(let a of obj) {
//     console.log(obj[a]);
// }


// let a=[1,3,5,2,4,4,5];
// for (let i = 0; i < a.length; i++) 　{
// 　 if (a[i] === 3) { 
//            console.log(a[i] );
//            break;    
// 　  } 
//     console.log("test"+i);
// }


let i = 0; 
let n = 0; 
while (i < 5) {

　i++; 
　if (i === 4) {
　　 break; 
　} 
  n = n + i; 
　console.log(n); 
} 
