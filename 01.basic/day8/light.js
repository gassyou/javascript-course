let myLight = (timer, color) => {

    return new Promise((resolve) => {
        setTimeout( ()=> {
            console.log(`${color}`)
            resolve();
        }, timer);
    });

};

let run = ()=> {
    
    Promise.resolve()
        .then(() => { return myLight(3000, 'red');})
        .then(() => { return myLight(2000, 'green');})
        .then(() => { return myLight(1000, 'yellow');})
        .then(() => { run();})
    
};
run();