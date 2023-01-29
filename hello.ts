const message:string = 'Hello! TypeScript!';
console.log(message);
/*
setTimeout(()=>{
    console.log("終了")
},1000);
console.log("タイマー開始");
*/

new Promise(resolve=>{
    setTimeout(()=>{
        console.log("3秒前");
        resolve();
    },1000);
}).then(()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("2秒前");
            resolve();
        },1000)
    })
}).then(()=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("1秒前");
            resolve();
        },1000)
    })
})