// console.log(typeof(Object))     //function
// console.log(typeof(Object()))   //object
// console.log(Object.prototype)


let person = {
    name: "Trisha",
    getName(){
        console.log("Name is : " + this.name)
    }
}
console.log(person)

console.log(typeof(person)) //  Object
console.log(person.prototype)       //undefined bcz here person is a variable not a function(constructor or class)

console.log(Object.getPrototypeOf(person))


console.log(person.__proto__)

console.log(Object.getPrototypeOf(person) === Object.prototype)     //true

function Animal(name){
    this.name = name
}

let a = new Animal("Dog")

console.log(Object.getPrototypeOf(a))
console.log(Object.getPrototypeOf(Animal))
console.log(Object.prototype)


console.log(Object.getPrototypeOf(a) === Object.prototype)      //false
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(Animal))     //false
console.log(Object.getPrototypeOf(Animal) === Object.prototype)

console.log(Object.getPrototypeOf(Animal) === Function.prototype)       //true
console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype)      // true

console.log(Object.prototype.constructor === Object)        //true bcz Object.prototype.constructor references to Object


function Person(name) {
    this.name = name
    Person.prototype.sayHellow = function(){
        console.log("Hellow", this.name)
    }
}

let p1 = new Person("trisha")
p1.sayHellow()

let p2 = new Person("Sadhana")
p2.draw = function() {
    return "I can draw"
}

console.log(p2.draw)            //[Function (anonymous)]
console.log(p2.draw())          //I can draw

// console.log(p1.draw())       //TypeError: p1.draw is not a function


//  prototype linkage

console.log(p1.__proto__ === Person.prototype)      //true
console.log(p2.__proto__ === Person.prototype)      //true
console.log(p1.__proto__ === Object.getPrototypeOf(p1))     //true

console.log(p1.constructor.prototype)           //{ sayHellow: [Function (anonymous)] }

//  shadowing
p1.sayHellow = function() {
    return "Hellow "
}
// override the Person function sayHellow()
console.log(p1.sayHellow())


// console.log(p1)