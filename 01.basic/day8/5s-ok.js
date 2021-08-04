function TimerCreator() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(new Date());
        }, 1000);
    });
}

// TimerCreator().then((value)=>{console.log(value)});

function run() {

    TimerCreator().then((value)=>{
        console.log(value);
        return TimerCreator();
    })
    .then(()=>{
        run();
    });
   
}

run();
