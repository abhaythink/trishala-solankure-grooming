
function add(a, b){
    return a + b
}

function average(a, b){
    return add(a, b) / 2
}

let avg = average( 5,6)
console.log(avg)


// stack overflow
function stackOverflow(msg){
    console.log(msg)
    stackOverflow(msg)
}

// stackOverflow("hellow")     //stack overflow

