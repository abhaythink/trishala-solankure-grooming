// function filter(numbers){
//     let result =[]
//     for(const num of numbers){
//         if(num % 2 == 1){
//             result.push(num)
//         }
//     }
//     return result;
// }


function isEven(num){
    return num % 2 ==0
}

function isOdd(num){
    return num % 2 == 1;
}

function filter(number, callback){
    let res = []
    for(const num of number){
        if(callback(num))
            res.push(num)
    }
    return res;
}

let numbers = [1,2,3,6,4,5,8,,9]

// let oddNums = filter(numbers, function(num){
//     return num % 2 ==1;
// });

let oddNums = filter(numbers, (num) => num % 2);

console.log(oddNums)


// let number = [1,2,3,4,5,6,7,8]
// console.log(filter(number))

