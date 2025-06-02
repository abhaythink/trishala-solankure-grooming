// function task(msg){
//     let n = 1000000000
//     while(n > 0){
//         n--
//     }
//     console.log(msg)
// }

// console.log("Start Script !!!")
// task("Hellow")
// console.log("End Script !!!")


// callback
// console.log("Start Script...")
// setTimeout(() => {
//     console.log("Downloaded a file...")
// }, 3000);
// console.log("Script Ends...")


// callback stack
// even though it is having 0 sec delay, the JavaScript engine places the following function call on the callback queue and executes it when the call stack is empty. 
console.log("Start Script...")
setTimeout(() => {
    console.log("Downloaded a file...")
}, 0);
console.log("Script Ends...")
