// var

// function checking(){
//     if(true)
//     {
//         var a = 10;
//         console.log(a)
//     }
//     console.log(a)      //we can access outside the block scope 
// }

// console.log(a) // we cannot access outside the function scope
// checking()


for(var i = 0; i<5 ;i++){
    console.log("variable at index : ", i)
}

console.log("final index : " , i)

// let 

// function check(){
//     if(true){
//         let b = 10
//         console.log(b)      //we can access inside block
//     }
//     console.log(b)      //we cannot access outside block
// }

// check()


for(let  j = 5 ; j < 10 ; j++){
    console.log("variable at index : ", j)
}
console.log("final index : ", j) 