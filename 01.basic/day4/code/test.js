// let msg1 = '\uD87E\uDC04';
// console.log(msg1);
// console.log("\uD867\uDE3D".length);
// console.log("\u{29e3d}".length);
// console.log("𩸽".length);
// console.log("あ".length);
// const codePoints = ["𩸽"];
// console.log(codePoints.length);

// console.log("---");
// let string1 = "ñ"; 
// console.log(string1.normalize('NFC').length);

// console.log("------");

// console.log(msg2.charAt(2));
// console.log(msg2.charAt(3));
// console.log(msg2.charAt(4));
// console.log(msg2.charAt(5));
// console.log("------");
// console.log(msg2.charCodeAt(2));
// console.log(msg2.charCodeAt(3));
// console.log(msg2.charCodeAt(4));
// console.log(msg2.charCodeAt(5));
// console.log("------");
// console.log(msg2.codePointAt(2));
// console.log(msg2.codePointAt(3));
// console.log(msg2.codePointAt(4));
// console.log(msg2.codePointAt(5));
// let msg2 = 'あいう𩸽ういあ';
// console.log(msg2.substr(2,5));
// console.log(msg2.split(1,5));
// // console.log(msg2.startsWith("あいう"));

// console.log(msg2.concat("sss"));

// let aa = msg2.split("う");
// aa = ['あい','𩸽','いあ'];



// console.log("------");
// console.log(msg2.indexOf("う"));
// console.log(msg2.lastIndexOf("う"));
// console.log(msg2.indexOf("いう"));
// console.log(msg2.indexOf("うい"));
// console.log(msg2.lastIndexOf("いう"));
// console.log(msg2.indexOf("𩸽"));
// console.log(msg2.lastIndexOf("𩸽"));
// console.log(msg2.indexOf("𩸽あ"));

// // const str = 'Mozilla';

// // console.log(str.substr(-5, 3));
// // let d = new Date("2011-11-11");
// // console.log(d.getFullYear());

var today = new Date();
var endYear = new Date("2021-12-31"); // 月日を設定
console.log(endYear);
var msPerDay = 24 * 60 * 60 * 1000; // 一日をミリ秒に換算
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); // 今年の残り日数を返す
console.log(daysLeft);

// // console.log(today.toDateString());
// // console.log(today.toTimeString());
// // console.log(today.toLocaleDateString());
// // console.log(today.toLocaleTimeString());
// // console.log(today.toUTCString());

// // console.log(today.getTimezoneOffset());

// // console.log("this is'asssss");
// console.log(Number.MAX_VALUE);

// let bb = [22,22,333,11,22];
// console.log(Math.max( [22,22,333,11,22]));
// console.log(Math.max(22,222,444,222222));

// console.log(Math.random());

// new Date().getMinutes()
console.log(endYear);
console.log(today);

console.log(today.getMonth());