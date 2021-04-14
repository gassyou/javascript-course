const numList = [10,3,7,12,25,87,30,28];
for (let i = 0; i < numList.length; i++) {
    if(numList[i]%2 === 0) {
        console.log(numList[i]);
    } else {
        console.log(numList[i] + "is not even!");
    }
}