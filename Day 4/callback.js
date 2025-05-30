// function sum(a, b){
//     console.log(a+b)
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b)
// }

// calculator(5,6,  (a, b) => {
//     console.log(a+b)
// })

// const hellow = () => {
//     console.log("Hellow")
// }

// setTimeout(hellow, 3000)




function getData(id, getNextData){
   setTimeout(() => {
     console.log("Data : " +id)
    if(getNextData)
        getNextData();
       
}, 2000);
}

// getData(2)

// all 3 execute same time bcz they are running parallely. 
// timer for those started same time and ended same time
// getData(2)
// getData(3)
// getData(5)


// callback hell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, () => {
            getData(4)
        })
    });
});
