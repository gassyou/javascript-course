let sampleArray = [0,1,2,3,5,6,8,9,10,11,19];

for(let i = 0; i < sampleArray.length - 1; i++) {

    let gap = sampleArray[i+1] - sampleArray[i];

    if(gap === 1) {
        continue;
    }
    for(let j = 1; j < gap; j++) {
        console.log(sampleArray[i] + j); 
    }
};
