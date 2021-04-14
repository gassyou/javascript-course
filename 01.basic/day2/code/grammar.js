let テスト="aaa";
console.log(テスト);

let test = 0;

if(!test) {
    console.log("aa");
}

console.log(parseInt("0100",2));
console.log(parseInt("0100",10));
console.log(parseInt("0100",8));
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("34 45 66"));
console.log(parseFloat(" 60 "));
console.log(parseFloat("40 years"));
console.log(parseFloat("He was 40"));
console.log(parseInt(10n,10));


var unusualPropertyNames = {
    '': '空文字列',
    '!': 'バン！'
  }
//   console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string が発生
  console.log(unusualPropertyNames['']);  // 空文字列
//   console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token ! が発生
  console.log(unusualPropertyNames['!']); // バン！

  console.log(2**3);
  console.log(2<<3);

  // 配列
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // true を返す
3 in trees;        // true を返す
6 in trees;        // false を返す
'bay' in trees;    // false を返す（インデックスの指す値ではなく、
                   // インデックスの数字を指定しなければならない）
'length' in trees; // true を返す（length は Array のプロパティ）

// 定義済みオブジェクト
'PI' in Math;          // true を返す
var myString = new String('coral');
'length' in myString;  // true を返す

// ユーザー定義オブジェクト
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true