(function(){
    console.log("This runs immediately...")
})();
// not accessible after its initial creation.

let show = function(){
    console.log("Accessing using variable name...")
}

show()

// Anonymous function as argument to another function
setTimeout(function(){
    console.log("Execute after 1 second.")
}, 1000)


// passing argument
let person = {
    "fName" : "Trisha",
    "lName" : "Solankure"
};

(function(){
    console.log(person.fName , person.lName)
})(person);