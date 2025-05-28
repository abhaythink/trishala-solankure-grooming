//Arithmatic operator

let sum = 10 + 20
console.log(sum)

let a = 10
b = 25
let res = a + b
console.log(res)

// addition operator with string --> concatination

let str = '20'
let str2 = 10
console.log(str + str2)

console.log(25 + '4')

console.log(NaN + NaN)      //NaN
console.log(Infinity + Infinity)        //Infinity
console.log(-Infinity + (-Infinity))    //-Infinity
console.log(-Infinity + Infinity)
console.log( +0 + (+0))         //+0
console.log(0 + 0)
console.log(0 + (-0))
console.log((-0) + (-0))        //-0



// Substraction

let c = 10
let d = '15'
console.log(c - d)

let e = 'trisha'
console.log(c - e)

console.log('t' - 25)
console.log(25.36 - 't')
console.log(true - 25)          //true is converted to 1
console.log('a' - 'c')


//multiplication

console.log(15*2)
console.log('tsdf' * 25)
console.log(false * 20)


// division

console.log(25/2)
console.log(Infinity / Infinity)
console.log(Infinity / 2)
console.log(0/0)


// valueOf 

let energy = {
    valueOf(){
        return 100;
    }
}

let current = energy + 25
console.log(current)

let energy1 = {
    toString() {
        return 25;
    }
}

let cur = energy1 * 25
console.log(cur)

// Remaider 
console.log(25%2)
console.log(23%-3)
console.log(-25%2)
console.log(-25% -3)
console.log("Infinity cases")
console.log(Infinity % Infinity)
console.log(Infinity % 10)
console.log(10% Infinity)
console.log(Infinity % 0)
console.log(0%Infinity)


console.log("Special case")
console.log(10%0)
console.log(0% 10)
console.log('10' % 3)



console.log("checking odd or not")

let isOdd = 24 % 2 == 1
console.log(isOdd)