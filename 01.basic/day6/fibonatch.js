
function fibonatch(current,next,max) {
    if(current < max) {
        console.log(current);
    }
    
    if (next > max) {
        return;
    }
    fibonatch(next,current+next,max);
}

fibonatch(1,2,100)


let a =  (number) => {
    return number * number;
}
console.log(a(12));