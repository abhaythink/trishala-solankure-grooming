// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Weather data")
//             resolve("Success");
//         },2000);
//     });
// }

// async function weatherData(){
//     console.log("1st call")
//     await api()
//     console.log("2nd Call")
//     await api()
// }

// weatherData();



function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data", id)
            resolve("Success")
        },2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4)
    await getData(5)
}

getAllData()