let msg1 = '\uD87E\uDC04';
console.log(msg1);
console.log("\uD867\uDE3D".length);
console.log("\u{29e3d}".length);
console.log("𩸽".length);
console.log("あ".length);
const codePoints = Array.from("𩸽");
console.log(codePoints.length);

console.log("---");
let string1 = "ñ"; 
console.log(string1.normalize('NFC').length);

console.log("------");
let msg2 = 'あいう𩸽ういあ';
console.log(msg2.charAt(2));
console.log(msg2.charAt(3));
console.log(msg2.charAt(4));
console.log(msg2.charAt(5));
console.log("------");
console.log(msg2.charCodeAt(2));
console.log(msg2.charCodeAt(3));
console.log(msg2.charCodeAt(4));
console.log(msg2.charCodeAt(5));
console.log("------");
console.log(msg2.codePointAt(2));
console.log(msg2.codePointAt(3));
console.log(msg2.codePointAt(4));
console.log(msg2.codePointAt(5));

console.log("------");
console.log(msg2.indexOf("う"));
console.log(msg2.lastIndexOf("う"));
console.log(msg2.indexOf("いう"));
console.log(msg2.indexOf("うい"));
console.log(msg2.lastIndexOf("いう"));
console.log(msg2.indexOf("𩸽"));
console.log(msg2.lastIndexOf("𩸽"));
console.log(msg2.indexOf("𩸽あ"));

const str = 'Mozilla';

console.log(str.substr(-5, 3));