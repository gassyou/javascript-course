const numList = [0,3,,12,25,87,30,28];
for (let i = 0; i < numList.length; i++) {

    if(numList[i]) {
        if(numList[i]%2 === 0) {
            console.log(numList[i]);
        } else {
            console.log(numList[i] + "is not even!");
        }
    } else {
        console.log("data : "+i+" 番目 is undefined!");
    }

}

undefined === false