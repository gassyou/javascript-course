function TimerCreator(timer,color) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`${color}`);
            resolve();
        }, timer);
    });
}

function run() {

    TimerCreator(3000,'red')
        .then( ()=>{return TimerCreator(2000,'green');} )
        .then( ()=>{return TimerCreator(1000,'yellow');} )
        .then( ()=>{run();});
} 

run();
