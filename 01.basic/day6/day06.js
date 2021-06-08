// const test = function s (number) {
//     return number * number;
// }

// console.log(test(5));

// const square = (number)=>{ 
//     console.log(number * number ) ;
// }

// const t = square(5);

// console.log(t);


// function myFunc(theObject) {
//     let newObject = {... theObject};
//     newObject.make = 'Toyota2';
//     return newObject;
//   }

//   let mycar = {make: 'Honda', model: 'Accord', year: 1998};
//   console.log(myFunc(mycar));
//   console.log(mycar);

// function log(f) {
//     console.log( f(5,6) );
// }

// function fun(a,b){
//     return a + b;
// };

// log(fun);

function test(a,b=1) {
    return a + b;
}
console.log(test(1));
console.log(test(1,5));
console.log(test());