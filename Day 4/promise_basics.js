// let users = []

// function getUser(callback){
//     setTimeout(() => {
//         callback([
//             {name :"Trisha", email : "trisha@gmail.com"},
//             {name : "Sadhana", email : "sadhana@gmail.com"}
//         ]);
//     }, 3000);
    
// }

// function findUser(username, callback){
//      getUser((users) =>{
//     const findUser = users.find((user) => user.name === username)
//     callback(findUser);
// });
// }

// findUser("Trisha", console.log)



function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if("success"){
            resolve([
                {name  : "Trisha", email : "tris@gmail.com"},
                 {name : "Sadhana", email : "sadhana@gmail.com"}
            ])
        }
        else{
            reject("Failed to the user list")
        }
        }, 2000);
    })
}

getUser().then((users)=>{
    console.log(users)
}).catch((err)=>{
    console.log(err)
})