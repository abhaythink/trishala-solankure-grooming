// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     // resolve("Success")
//     reject("Failed")
// })

// function getData(id, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", id);
//             // resolve("Success")
//             reject("error")
//             if(getNextData)
//                 getNextData();
//         }, 5000);
//     });
// }

// getData(5)

// handling of promises

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         // resolve("Success")
//         reject("network error")
//     });
// };

// let promise = getPromise();
// here res is argument which takes value which is passed in resolve function
// promise.then((res) => {
//     console.log("Promise fulfilled", res)
// });

//here err is argument which takes value which is passed in reject function
// promise.catch((err) => {
//     console.log("rejected ", err)
// })






// let p = new Promise((resolve, reject)=>{
//     // let a = 1 +1 
//     let a = 1+2
//     if(a == 2)
//         resolve("sucess")
//     else{
//         reject('Failed')
//     }
// })

// p.then((msg) => {
//     console.log("this is in then", msg)
// }).catch((msg) => {
//     console.log('this is in the catch', msg)
// })




function disp(username, subscribe) {
    return new Promise((resolve, reject) =>{
        if(username)
            reject("User already present")
        else if(subscribe)
            resolve("Subcribed successfully...")
        else{
            resolve("Not a user and not subscribed")
        }
    })
}


disp(false, false).then((res)=>{
    console.log(res);
    return disp(false, true);
}).then((res)=>{
    console.log(res)
    return disp(true, true);
}).catch((err)=> {
    console.log(err);
});