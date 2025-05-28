for(let i = 1; i< 4; i++){
    for(let j = 1; j < 4; j++){
        if(i + j == 4)
            break;
        console.log(i, j)
    }
}

console.log("-------------")
outer: for(let i = 1; i< 4; i++){
    for(let j = 1; j < 4; j++){
        if(i + j == 4)
            break outer;
        console.log(i, j)
    }
}