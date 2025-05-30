let user = new Map();
console.log(typeof user)
console.log(user instanceof Map)

user.set("Trisha", "developer").set("sadhana", "Support").set("Seema", "Sales")
console.log(user)



let subjects = new Map([
    [1, "Java"],
    [2, "Sql"],
    [3, "C++"],
    [4, "Python"]
]);

// find value from map using key'
console.log(subjects.get(3))

// if key is not present then it will return undefined
console.log(subjects.get(5))


// to chk key present in the map --> has method

console.log(subjects.has(2))
console.log(subjects.has(6))

// To chk no. of elts in the map --> size property
console.log(subjects.size)

// to get all the keys of map --> keys() --> it will return new iterator object of keys
console.log(subjects.keys())

for(const id of subjects.keys()){
    console.log(id)
}

// use the values() method to get an iterator object that contains values for all the elements in the map

console.log(subjects.values())

for(const subName of subjects.values()){
    console.log(subName)
}

// entries() method returns an iterator object that contains an array of [key,value] of each element in the Map object

console.log(subjects.entries())

for(const [id, name] of subjects.entries()){
    console.log(`${id} : ${name}`)
}

// forEach() method of the map object
subjects.forEach((id, name) => console.log(`${id} : ${name}`))

// Convert map keys or values to an array
let keys = [...subjects.keys()]
console.log(keys)

let values = [...subjects.values()]
console.log(values)

// delete an entry in the map --> delete() method.

// console.log(subjects.delete(3))
// console.log(subjects.keys())


// To delete all the elements from the map
// subjects.clear()
// console.log(subjects)

