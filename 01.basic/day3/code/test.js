let country = "usaっｓ";
switch(country) {
    case "japan":
        console.log("speaking Japanese");
    case "china":
        console.log("speaking Chinese");
    case "usa":
        console.log("speaking English");
    default:
        console.log("speaking English");
}
// throw "e";


try {
    console.log("aaa");
    throw "e";
    console.log("bbb");
} catch (e) {
    console.log("ccc");
} finally {
    console.log("ddd");
}

console.log("ddddd");

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

console.log("======");

let j = 0;
while(j<5) {
    j += 1;
    console.log(j);
}

let test = {
    name: "mars",
    age: "10",
    tel: "1111111"
};

for(let i in test) {
    console.log(i);
}