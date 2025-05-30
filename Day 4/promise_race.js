const record1 = new Promise((resolve, reject) => {
    // resolve("Video 1 Recorded")
    reject("not recorded")
})

const record2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve("Video 2 Recorded")
        reject("not recorded")
    }, 2000);
    
})

const record3 = new Promise((resolve, reject)=>{
    // resolve("Video 3 recorded")
    reject("Video 3 is not recorded")
})

// it returns first record info which will executed in less time
Promise.race([
    record2,
    record3,
    record1
]).then((message) =>{
    console.log(message)
}).catch((message) => {
    console.log(message)
});