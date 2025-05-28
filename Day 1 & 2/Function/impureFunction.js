let total = 0

function addTotal(amount){
    total += amount;
    return total;

}

console.log(addTotal(10))
console.log(addTotal(20))


function greeding(name){
    console.log("Hellow!! " + name)
}

greeding("Trisha")          //impure function bcz having effect outside
