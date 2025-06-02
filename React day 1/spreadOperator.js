const hobbies = ["Sports", "Cooking"]
const newHobbies = ["Reading"]
const mergeHobbies = [...hobbies, ...newHobbies]
console.log(mergeHobbies)

const user ={
    name : "Trisha",
    age : 23
}

const newUser = {
    isAdmin : true,
    ...user
}

console.log(newUser)