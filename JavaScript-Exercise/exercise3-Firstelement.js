/* 
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the 
first 'n' elements of the array
*/

// Here your code

function firstElement(first, n) {
    if(Array.isArray(first)) {
        return first.slice(0, 1);
    } else if (!(Array.isArray(n))) {
        return void 0;
    }
}


console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));

/*
Expected Output
[7]
[]
[7]
[7]
[7] 
*/