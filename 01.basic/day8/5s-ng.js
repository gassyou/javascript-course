let timePromise = new Promise((resolve) =>{
    setInterval(()=>{
        resolve(new Date());
    },1000);
});

timePromise.then((value)=>{
    console.log(value);
});