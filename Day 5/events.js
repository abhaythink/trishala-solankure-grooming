let btn = document.querySelector("#btn");

// function handleClick(){
//     alert("It was cliked")
// }

// btn.addEventListener('click', handleClick)

//using arrow function
// btn.addEventListener('click',() => {
//     alert('It was clicked!');
// });


// let link = document.querySelector('a');

// link.addEventListener('click',function(event) {
//     console.log('clicked');
//     event.preventDefault();
// });




btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});
