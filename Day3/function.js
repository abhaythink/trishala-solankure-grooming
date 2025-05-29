function square(x){
    return x*x;
}

//pass by value

let y = 10
let result = square(y)

console.log(result)     //100
console.log(y)          //10    no need

//pass by reference

let person = {
    name : "Trisha",
    age : 23
}

function increaseAge(obj){
    obj.age += 1
}

console.log(person)
increaseAge(person)
console.log(person)


function add(a, b){
    return a+b
}

let sum = add
console.log(sum(4,5))
console.log(add(4,5))


// Passing a function to another function

function average(a, b ,s){
    return s(a, b)/2;
}

console.log(average(45,50, sum))


function compareBy(property){
    return function(a, b)
    {
        let x = a[property],
        y = b[property];

        if(x > y){
            return 1;
        }
        else if(x < y){
            return -1;
        }
        else{
            return 0;
        }
    };
}

let products = [
    {name : "iPhone", price : 50000},
    {name : "Vivo", price : 28000},
    {name : "Samsung Galaxy", price : 37000}
    
]


console.log("Sort by name")
products.sort(compareBy('name'))
console.table(products)

console.log("Sort by price")
products.sort(compareBy('price'))
console.table(products)