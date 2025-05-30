//  const record1 = new Promise((resolve, reject) => {
//     // resolve("Video 1 Recorded")
//     reject("not recorded")
// })

// const record2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         // resolve("Video 2 Recorded")
//         reject("not recorded")
//     }, 2000);
    
// })

// const record3 = new Promise((resolve, reject)=>{
//     // resolve("Video 3 recorded")
//     reject("Video 3 is not recorded")
// })

// it return result only when all the records are succeded , and return when all functions are loaded 
// execute parallely
// if any one returs reject function then it will throw an error
// Promise.all([
//     record1,
//     record2,
//     record3
// ]).then((messages) =>{
//     console.log(messages)
// })



let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1st promise is called...")
        resolve(10)
    },3000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("2nd promise is called...")
        resolve(20);
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("3rd promise is called...")
        // resolve(30)
        reject("Failed")
    }, 1000);
})
// first 3rd then 2nd then 1st according to setTimeout

// Promise.all([p1, p2, p3]).then((result) => {
//     const total = result.reduce((p,c) => p +c)
//     console.log(`Result : ${result}`)
//     console.log(`Total : ${total}`)
// })

Promise.all([p1, p2, p3]).then(console.log).catch(console.log);
