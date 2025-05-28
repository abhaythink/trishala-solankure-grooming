let person = {
    firstName : 'Trisha',
    lastName : 'Solankure'
};

//accessing
console.log(person['firstName'] + " " + person.lastName) 
// Modifiying property using assignment operator

firstName = "Trishala"

// we cannot access keys which are declared in quotes using dot operator
let address = {
    state : "karnataka",
    district : "belgavi",
    taluk : "nippani",
    'building no' : "344b"
}
//correct
console.log(address["building no"]);

//wrong
// console.log(address."building no")       //syntaxError unexpected String

console.log(address.village)        //undefined 

// adding new property
address.country = "India";
console.log(address)

// deleting property
delete address.taluk;
console.log(address)


// checking  property exist or not 
console.log('village' in address)
console.log('country' in address) 


let empty = {};

console.log(empty)  //{}
console.log(typeof empty)   //object

 