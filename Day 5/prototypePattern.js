// using function

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

let p1 = new Person("Trisha", "Solankure");
console.log(p1.getFullName());

// using class

class Person2 {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    return this.fname + " " + this.lname;
  }
}

let p2 = new Person2("Sadhana", "Swami");
console.log(p2.getFullName());
