
// function download(url){
//     setTimeout(()=>{
//         console.log(`Downloading ${url}`)
//     },1000)
// }

// function process(url){
//     console.log(`Processing ${url}`)
// }

// let url = 'https://www.javascripttutorial.net/pic.jpg';
// download(url)
// process(url)



// Asynchronous using callback

function download(url, callback){
    setTimeout(() =>{
        console.log(`Downloading ${url}`)
        callback(url);
    }, 1000);
}

function process(url){
    console.log(`Processing ${url}`)
}

let url = 'https://www.javascripttutorial.net/pic.jpg';
download(url, process)



// function download(url, callback){
//     setTimeout(()=> {
//         console.log(`Downloading ${url}....`);
//         callback(url)
//     }, 3000);
// }

// let url = 'https://www.javascripttutorial.net/pic.jpg';

// download(url, function(picture){
//     console.log(`Processing ${picture}`);
// });



// Error handling

// function download(url, callback, failure){
//     setTimeout(() => {
//         console.log(`Downloading ${url}...`);
//         url? callback(url) : failure(url);
//     }, 1000);
// }

// function failure(url){
//     console.log(`Invalid ${url}`)
// }

// function processing(url){
//     console.log(`Processing ${url}`);
// }

// // download('', processing, failure)

// download('abdc.com' , processing, failure)


// nested call back

let url1 ="dajfk.com"
let url2 = "fdyeuiwokfjh.com"
let url3 = "ghjfikjhuifakd.in"

// callback hell
download(url1, function(url1){
    process(url1);
    download(url2, function(url2){
        process(url2);
        download(url3, function(url3){
            process(url3);
        });
    });
});
