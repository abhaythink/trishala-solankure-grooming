function getScore(){
    return [20,30,45,10];
}

let [x, y, z] = getScore();
console.log(x, y, z)


function getName(){
    let fName = "Trisha", lName = "Solankure";
    return {fName, lName};
}

// let names = getName();
// let firstName = names.fName, lastName = names.lName;
// console.log(firstName, lastName)

// let {fName, lName} = getName();
// console.log(fName, lName)

let {fName:firstName, lName: lastName} = getName()
console.log(firstName, lastName)



function getItems(){
    return [10,20]
}

// let item = getItems();
// let thirdItem = item[2] != undefined ? item[2] : 0;
// console.log("third item : " + thirdItem)

// simpler with the destructuring assignment with a default value
let [,,third = 0] = getItems()
console.log(third)

function emptyArray(){
    return [,]
}
// let [a= 1 , b = 2] = [10]
// console.log(a, b)        // 10 2

let [a = 1 , b = 2] = emptyArray();
console.log(a, b)


function get(){
    return null
}

// let [a1 = 1, b1 = 2] = get()
// console.log(a1, b1)         //TypeError: get is not a function or its return value is not iterable


// A typical way to solve this is to fallback the returned value of the getItems() function to an empty array

let [c=10, d=20] = get() ||[];
console.log(c, d)
