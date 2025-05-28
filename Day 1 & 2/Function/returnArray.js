function getName(){
    let first = "Trishala"
    let last = "Solankure"
    return [first, last];
}

// let name = getName();
// console.log(name[0] + "  " + name[1])

console.log(getName())


function getScore(){
    return [10,20,30]
}


function getScore(){
    return [50,,60,70,80]
}
let [x, y, z] = getScore()
console.log({x, y, z})

let [a, b, c, d] = getScore()
console.log({a, b, c, d})       //d : undefined