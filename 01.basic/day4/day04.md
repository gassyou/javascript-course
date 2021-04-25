---
theme: gaia
_class: lead
paginate: true
marp: true
---

# **Javascript 入門**
### テキスト、数字と日付の処理
鄭祥飛@2021/04/28

---
# テキスト(文字列)の作成
以下の３つ方法があります。

```js
let a = "hello world";
let b = 'hello world'; // 効果は二重引用符と同じです
let c = `hello world`;
```

---
# 文字列に改行を挿入
```js
let a = "hello \n world";
let b = 'hello \n world'; 
let c = `hello
 world`;
```
---
# エスケープ文字
```js
\b // バックスペース、前の位置もう時を削除
\f　//　改ページ
\n　//　改行
\r //　Retrun
\t //　Tabキー
\\　//　\を入力する
\'　//　シングルクォーテーション
\"　//ダブルクォーテーション
\xXX　//2桁の16進数が表すLatin-1文字
\uXXXX　//4桁の16進数が表すUnicode文字
\u{XXXXXX}　// 	16進数のコードポイントが表すUnicode文字
```

---
# \uXXXX と　\u{xxxx}の区別
 * \u{xxxx}:{}中に任意桁数の１６進数
 * \uXXXX　：一文字で表現できない場合、２つ\uXXXX組み合わせ或いはu{xxxx}で表現できる

 例：

 ```js
    console.log("\uD867\uDE3D"); // => "𩸽"
    console.log("\u{29e3d}"); // => "𩸽"
 ```

https://jsprimer.net/basic/string-unicode/


---
# 文字列に変数を挿入
```js
let name = "ロココ";
let b = 'hello ' + name; 
let c = `hello ${b}`;
let d = 'hello ${b}';
```

---
# 文字列長さ -- length
* エスケープ文字は一文字で計算する。
* バイト数で計算する

```js 
let name = "ロココ";
console.log(name.length);
console.log("𩸽".length);
console.log("あ".length);
const codePoints = Array.from("𩸽");
console.log(codePoints.length);
```

---
# 指定位置位置の文字を返す -- chartAt
```js 
let msg2 = 'あいう𩸽ういあ';
console.log(msg2.charAt(2)); // う
console.log(msg2.charAt(3)); // �
console.log(msg2.charAt(4)); // �
console.log(msg2.charAt(5)); // う
console.log("------");
console.log(msg2.charCodeAt(2)); // うの代表する１６進数を１０進数に変換した数字
console.log(msg2.charCodeAt(3));// 𩸽の代表する１６進数前半を１０進数に変換した数字
console.log(msg2.charCodeAt(4));// 𩸽の代表する１６進数後半を１０進数に変換した数字
console.log(msg2.charCodeAt(5));　// うの代表する１６進数を１０進数に変換した数字
console.log("------");
console.log(msg2.codePointAt(2));
console.log(msg2.codePointAt(3));　// 𩸽の代表する１６進数を１０進数に変換した数字
console.log(msg2.codePointAt(4));　// 𩸽の代表する１６進数後半を１０進数に変換した数字
console.log(msg2.codePointAt(5));
```
---
# 文字の所在位置を返す -- indexOf
```js 
let msg2 = 'あいう𩸽ういあ';
console.log("------");
console.log(msg2.indexOf("う"));
console.log(msg2.lastIndexOf("う"));
console.log(msg2.indexOf("いう"));
console.log(msg2.indexOf("うい"));
console.log(msg2.lastIndexOf("いう"));
console.log(msg2.indexOf("𩸽"));
console.log(msg2.lastIndexOf("𩸽"));
console.log(msg2.indexOf("𩸽あ"));
```
--- 
# 文字列検索
* startWith
* endWith
* includes

---
# 文字列分割と結合
* concat : 文字列の結語
* split : 文字列を部分文字列へと分けることで、String オブジェクトを文字列の配列に分割します。
* slice(beginIndex,endIndex) :  文字列の一部分を取り出し、新しい文字列を返します。
    * beginIndexとendIndexはマイナス指定できる。例：−２＝str.length-2
    * endIndex を省略した場合、 slice() は文字列の末尾までを取り出します
---
# 文字列の一部の抽出
* substring(indexStart,indexEnd)
    * indexEnd:　関数文字は、indexEndの文字は含めない。 省略場合、最後まで。
    * indexStart:indexEnd より大きかった場合、 2 つの引数が交換されたものとして実行されます。
* substr(start[, length])
    * start :正数場合、文字列の先頭から数えた位置になります。
    * start :負数場合、文字列の末尾から数えた位置になります。
    * length: 省略された場合、 substr() は文字列の末尾までの文字を抽出します。

---
# 大文字・小文字変換
* toLowerCase
* toUpperCase

---
# 空白の削除
* trim()
* trimLeft()
* trimRight()



---
# 宿題
1. 以下の文字列中に、各単語の先頭文字を大文字に変更し、余りの文字を小文字に変更する
```
Split pages by horizontal ruler (`---`). It's very simple! :satisfied:
```

2. 以下の文字列中の各単語から{０}以下の文字を出力する。
```
If you know how to write document with Markdown, you already know how to 
write Marp slide deck too.
```
出力：ou,ow,ow,ocument...

---