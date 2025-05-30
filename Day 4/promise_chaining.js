// let p = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>{
//         resolve(10)
//     }, 2000);
// })

// p.then((result) =>{
//     console.log(result)
//     // return result * 2;

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result *2)
//         }, 2000);
//     })

// }).then((result)=>{
//     console.log(result)
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//         resolve(result * 3);
//     }, 4000);
//     })
    
    
// }).then((result) => {
//     console.log(result)
// })

// ------------------------------------------------------------------

// function getData(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", id)
//             resolve("Success")
//         },2000);
//     });
// }

// getData(2).then((res)=>{
//     console.log(res)
//     getData(5).then((res) => {
//         console.log(res)
//     });
// });


// console.log("getting Data1...")
// getData(1).then((res)=>{
//     console.log("getting Data2...")
//     return getData(2)
// }).then((res) => {
//     console.log("getting Data3...")
//    return getData(3)
// }).then((res) =>{
//     console.log(res)
// })

// --------------------------------------------------------------


// function asyncFun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1")
//             resolve("Success")
//         }, 3000);
//     });
// }

// function asynFun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("Data2")
//             resolve("Sucess")
//         }, 2000);
//     })
// }

// // promise chain
// console.log("Fetching Data1...")
// asyncFun1().then((res) =>{
//     console.log(res)
//     console.log("Fetching Data2...")
//     asynFun2().then((res) => {
//         console.log(res)
//     });
// });


function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}

getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);