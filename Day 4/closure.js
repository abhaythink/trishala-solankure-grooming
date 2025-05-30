// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     sayHi();
// }

// greeting();

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     return sayHi;
// }
// let hi = greeting();
// hi(); 

function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('Trisha')); // Hi John
console.log(sayHello('Trisha')); // Hello John

// for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

// for (var index = 1; index <= 3; index++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log('after ' + index + ' second(s):' + index);
//         }, index * 1000);
//     })(index);
// }


// Using IIFE
// for (var index = 1; index <= 3; index++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log('after ' + index + ' second(s):' + index);
//         }, index * 1000);
//     })(index);
// }

// using let keyword
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}