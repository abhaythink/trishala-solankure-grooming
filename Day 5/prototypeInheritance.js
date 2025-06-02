let person = {
  name: "Trisha",
  greet: function () {
    return "Hi, I'm " + this.name;
  },
};

let teacher = {
  teach: function (sub) {
    return "I can teach " + sub;
  },
};

teacher.__proto__ = person;

let t1 = Object.create(teacher);

// console.log(t1.greet())         //ypeError: teacher is not a constructor
console.log(t1.greet());
console.log(t1.teach("Java"));

// let t2 = {
//     name : "Sadhana",
//     __proto__ : teacher
// }

let t2 = Object.create(teacher);

console.log(t2.greet());
console.log(t2.teach("Maths"));

console.log(Object.getPrototypeOf(teacher) === person); //true

let t3 = Object.create(teacher, {
  name: { value: "Priya" },
  teach: {
    value: function (sub) {
      return "I can also teach " + sub;
    },
  },
});

console.log(t3.name);
console.log(t3.teach("SQL"));
