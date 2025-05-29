

const items = [
    { name : "Bike", price : 70000},
    { name : "Tv", price : 50000},
    { name : "Phnone", price : 35000},
    { name : "laptop", price : 65000},
    { name : "Book", price : 1000}
]


// filter method
// const filterItems = items.filter((items) => {
//     return items.price < 50000
// })

// console.log(items)
// console.log("----------")
// console.log(filterItems)        //NEW ARRAY

// console.log("--------")
// console.log(items)


//MAP METHOD
// const itemNames = items.map((items) => {
//     return items.name
// })

// const itemPrices = items.map((items) => {
//     return items.price
// })

// console.log(itemNames)
// console.log(itemPrices)

// Find method
// const findItem = items.find((items) =>{
//     return items.name === "Book"
// })

// console.log(findItem)


// for each
// items.forEach((items) => {
//     console.log(items.name)
// })

// items.forEach((items) => {
//     console.log(items.price)
// })

// some method

// const hasCost =  items.some((items) => {
//     return items.price <10000;
// })

// console.log(hasCost)

// every method 

// const hasCostChk1 = items.every((items) => {
//     return items.price < 10000
// })

// const hasCostChk2 = items.every((items) => {
//     return items.price >=1000
// })
// console.log(hasCostChk1)        //false
// console.log(hasCostChk2)        //true


// Reduce method

// const total = items.reduce((currenttotal, items) => {
//     return items.price + currenttotal;
// }, 0)

// console.log(total)

// includes method
const elts = [1,2,5,3,6,8]
const includeChk = elts.includes(20)
console.log(includeChk)