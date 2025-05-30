// let person = {
//     fname : "Trisha",
//     lname : "Solankure",
//     age : 23,
//     greet(){
//         console.log("Hellow!!!")
//     },
//     fullName() {
//         console.log(this.fname + " " +this.lname)
//     }
// }

// person.greet();
// console.log(person)
// person.fullName()



function Person(fname, lname){
    this.fname = fname
    this.lname = lname

    this.fullName = function(){
        // console.log(fname + " " + lname)
        return this.fname + " " + this.lname;
    }
}


// using new keyword
// let p  = new Person("Trisha", "Solankure");
// // p.fullName()
// console.log(p.fullName())

// object creation without using new keyword it will thrwo TypeError
'use strict';

let p = new Person("Sadhana", "Swami");
console.log(p.fullName());
