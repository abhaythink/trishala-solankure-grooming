// let authenticated = true;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');

// // redirect to nextURL here
// console.log(nextURL); // '/admin'


let speed = 80

let res = speed > 120 ? "Too Fast" : speed > 90 ? "Fast" : "Slow";
console.log(res)