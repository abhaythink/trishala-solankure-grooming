// initializing array
let arr = new Array();      //using constructor
let arr1 = Array()        

let arr3 = new Array(5)  //array with initially size declaration
let arr4 = new Array(1,3,'hi', 56.36);      


console.log(arr)
console.log(arr1)
console.log(arr3)
console.log(arr4)

// length 

console.log(arr.length)
console.log(arr1.length)
console.log(arr3.length)
console.log(arr4.length)


//initialization 
arr[0] = 25;
arr[1] = 'trisha';
arr[2] = 45.36;
arr[3] = false;
arr[4] = 'c'

console.log(arr)

// without using Array constructor

let emptyArray = [];
console.log(emptyArray.length + "  " + emptyArray)

let elts = [25,52.12,'adb', true, 125n, null, 'j', undefined]
console.log(elts.length)
console.log(elts)

let undefinedArray = [, , , , ]

// Accessing elements
console.log(undefinedArray)
console.log(undefinedArray[2])


console.log(elts[2])
console.log(elts[5])


// Basic operations of Array
// add
elts.push(45)
console.log(elts)
elts.unshift(NaN)
console.log(elts)

// remove
console.log(elts.pop());
console.log(elts.shift())

// finding index
console.log(elts.indexOf(true))

console.log(Array.isArray(elts))
console.log(Array.isArray(125n))    // it is element present in array so false    

console.log(Array.isArray(undefinedArray))

console.log(Array.isArray(emptyArray))

console.log(Array.isArray(arr))

console.log(elts instanceof Array)      //it is an array so return true

let str = "Trishala"
console.log(str instanceof Array)        //return false bcz it is a string not array
