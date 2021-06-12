let sampleArray = [0,1,2,3,5,6,8,9,10,11,19];

for(let i = 1; i < sampleArray.length; i++) {

    let gap = sampleArray[i] - sampleArray[i-1];

    if(gap === 1) {
        continue;
    }
    for(let j = 1; j < gap; j++) {
        console.log(sampleArray[i-1] + j); 
    }
};
