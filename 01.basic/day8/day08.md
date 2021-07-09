---
theme: uncover
paginate: true
marp: true
---

# **Javascript 入門**
### Promise
鄭祥飛@2021/07/08

---
# 同期
一般的にはプログラムは順番に実行する。例：
```js
console.log("A");
console.log("B");
console.log("C");
```

上記のプログラムの出力は：A→B→C

---
# 同期実行の問題
プログラムにある操作非常に時間のかかる処理があるう場合、別の操作を影響することにになります。
例１：
```
あるアプリケーションに、サイズは大きなファイルのダウンロードする機能を実行すると、
アプリケーションの別の機能も操作できなくなる。
```

例２：
```
ユーザ情報をDBに保存する前に、ユーザーの携帯にSMSで通知メッセージを送る事が必要です。
SMSメッセージの送信がかかるので、保存処理も時間かかることになる
```

---
# 非同期
* コンピュータCPUは複数スレッドはあります。
* プログラム主体は、主要スレッドで実行する。
* 時間のかかる操作は、子スレッドを生成して実行する。

```
ユーザー情報保存開始→→→→→→→情報をDBに保存→→→→→→プログラムを終了
                   ↓
                   →→→→→SMSメッセージを送信
```
---
# JSのコールバック関数
現状JSは多スレッドを対応していない。ただ、「コールバック関数」手段で同じ効果を実現している。

```js
setTimeout(() => {
    console.log("aaaa");
}, 5000);
console.log("bbbb");
```
出力：bbbb→aaaa

```
setTimeout関数は、指定の時間の後に、なにか関数を実行する。
```

---

```js
setInterval(() => {
    console.log("aaaa");
}, 5000);
console.log("bbbb");
```
出力：bbbb→aaaa→aaaa→aaaa→aaaa

```
setTimeout関数は、指定の時間の毎に、なにか関数を実行する。
```

---
# コールバック関数地獄
```js
$.get('/get-user-name',function(name){
    $.get(`/get-user-phone-number?${name}`,function(phone){
        $.get(`/send-msg?${phone}`,function(){
            // メッセージの送信処理
        })
    })
});
```
* サーバからユーザの名前を取得する
* ユーザの名前で、ユーザーの携帯電話を取得する
* ユーザの携帯電話でメッセージを送信する

---
# コールバック関数の問題
* コールバック循環でコールバック関数を読み出し、ソースコードが読みにくいなる。
* 対応方法：Promiseを使用する

---
# Promiseとは
* JSに既存する対象です。
* new Promise()で作成できる
* 下記の実例関数がある
    * then()
    * catch()
* 下記の静態関数がある
    * resolve()
    * all()
    * race()
---

# 実例関数
```js
let staff = new StaffSalary();
staff.calculateNoTaxTotal();

```
* `staff`は`StaffSalary`の実例です。
* `calculateNoTaxTotal()`は実例から読み出しので、実例関数と呼ばれる
---

###### 静態関数
```js

// StaffSalaryの定義
function StaffSalary(name,basic,position,tax) {
    // 中身省略
}

// StaffSalary対象funという静態関数を追加する
StaffSalary.func = function() { //在构造函数的原型上添加方法
  console.log("This is an static method.");
}

// StaffSalary対象fun1という実例関数を追加する
StaffSalary.prototype.func1 = function() { //在构造函数的原型上添加方法
  console.log("This is an instance method.");
}

// 静態関数の読み出し
StaffSalary.fun();
```
---
# javaの静態関数
```java
public class StaffSalary {
    public StaffSalary() {

    }
    public static void test() {

    }
    public void test2() {

    }
}
```
---
# 質問
<!-- _backgroundColor: #a5f7fa -->
既存のJS対象に、静態関数を思い出しできますか？
ヒント：Math,Object対象など

---

