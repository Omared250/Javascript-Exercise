/*  Write a JavaScript function to check whether an `input` is an array or not */

// Here your code

function checkingArray(arr) {
    return Array.isArray(arr);
}

console.log(checkingArray('w3resource'));
console.log(checkingArray([1, 2, 4, 0]));

/* 
output expected 
false
true
*/