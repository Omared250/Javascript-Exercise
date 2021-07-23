/* 
Write a JavaScript function to get the first element of an array.
*/

// Here your code

function firstElement(first) {
    if(Array.isArray(first)) {
        return first.slice(0, 1);
    } else {
        return void 0;
    }
}


console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([]));
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([8, 9, 0, -2]));
console.log(firstElement([7, 9, 0, -2]));

/*
Expected Output
[7]
[]
[7]
[7]
[7] 
*/