let x = 10
let y = (x++, x+1)
console.log(x, y)



let arr = [1,2,3,4,5,6,7,8,9]
let s = ''
for(let i = 0, j=1; i < arr.length; i++, j++)
{
    s += arr[i] + ' ';
    if(j % 3 == 0){
        console.log(s);
        s = '';
    }
}

// i = 0 → because arrays in JavaScript are zero-indexed.
// 🔸 j = 1 → it's used to count items, not access them.

