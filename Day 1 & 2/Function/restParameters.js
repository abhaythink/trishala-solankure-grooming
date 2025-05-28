function add(...args){

}

// function sum(...args, a){

// }

function mul(a, ...args){

}


function sum(...args){
    let total = 0
    for(let i = 0; i< args; i++){
        total += i
    }
    return total;
    }

    console.log(sum(1,3,4))