function square(a){
    return a * a;
}

console.log(square(4))


function say(msg)
{
    console.log(msg)
}

// say("Hellow!!!")

let res = say("Hellow!!!")

console.log("Result : " , res)          //undefined


function compare(a, b){
    if(a > b)
        return 1;
    else if(a < b)
        return -1;
    else
        return 0;
}

let result = compare(5,3)
console.log(result)


function chkMsg(message){
    if(!message)
        return

    console.log(message)
}

chkMsg("Trishala")
chkMsg("")          
chkMsg("Solankure")