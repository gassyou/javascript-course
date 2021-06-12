
let Honda = new Car(1.8, 4);
Honda.run();


let toyota= new Car(2, 4);
toyota.wheel = 6;
toyota.run();


function Car(engine,wheel) {
    this.engine = engine;
    this.wheel = wheel;
    this.run = function() {
        console.log(`speeds:${this.engine * this.wheel}`);
    }
}


let car = {
    engine: 3,
    wheel: 3,
    run:function() {
        console.log(`speeds:${this.engine * this.wheel}`);
    }
};
Honda.name = 'aaa';
car.run();
console.log(Honda.name);

let p = Object.keys(car);
for (let i of p) {
    if (car.hasOwnProperty(i)) {
        console.log(`プロパティ${i}の値は：${car[i]}`);
    }
}

function Sample() {
    this.a = 1;
    this.b = 2;
 }

 
  const json = '{"result":true, "count":42, "run":"function() {console.log("aa");}"}';
  const obj = JSON.parse(json);
  obj.run();
