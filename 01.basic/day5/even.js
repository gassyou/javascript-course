let sampleArray = [  97, 88, 53, 52, 48, 35, 21, 11];

let evenArray = [];
let oddArray = [];

sampleArray.forEach((item) => {
    if(item % 2 === 0) {
        evenArray.push(item);
    } else {
        oddArray.push(item);
    }
});

evenArray.sort((a,b)=>{return a-b;});
oddArray.sort((a,b)=>{return b-a;});

let result = oddArray.concat(evenArray);

console.log(result);
