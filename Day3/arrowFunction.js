const user = {
    userName : "Trisha",
    price : 999,
    
    welcomeMsg : function(){
        console.log(`${this.userName}, welcome to website`)
        // console.log(this)        
    }
}

user.welcomeMsg()
// user.userName = "Sadhana"
// user.welcomeMsg()

console.log(this)       //here current context refers to the node environment and results empty {} bcz in global context is empty


// function test(){
//     console.log(globalThis)
// }

// test()

// function test(){
//     let userName = "Trisha"
//     console.log(this.userName)      //undefined
// }

// test()


const test = () => {
    console.log(test)
}

test
test()


const addTwo = (a, b) => {
    return a+b
}

console.log(addTwo(5,6))

// implicit return

const mulTwo = (a, b) => a*b
console.log(mulTwo(5,6))

//when we use curly braces then return statement is mandatory
//when we use parenthesis to return a result then return statment is not mandatory

const muliply = (a, b) => (a * b);

console.log(muliply(5,6))

// returning an object using arrow function
const obj = ()=>({name : "Trisha"})
console.log(obj())




// function isPositive(number){
//     return number >=0
// }

let isPositive = (number) => number >= 0;

console.log(isPositive(25))

// function randomNumber(){
//     return Math.random;
// }

let random = () => Math.random;
console.log(random)


document.addEventListener('click', function(){
    console.log('click')
})


document.addEventListener('click', () => {
    console.log('click')
})

document.addEventListener('click', () => console.log('click'))