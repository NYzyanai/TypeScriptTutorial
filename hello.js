var message = 'Hello! TypeScript!';
console.log(message);
/*
setTimeout(()=>{
    console.log("終了")
},1000);
console.log("タイマー開始");
*/
new Promise(function (resolve) {
    setTimeout(function () {
        console.log("3秒前");
        resolve();
    }, 1000);
}).then(function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("2秒前");
            resolve();
        }, 1000);
    });
}).then(function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("1秒前");
            resolve();
        }, 1000);
    });
});
