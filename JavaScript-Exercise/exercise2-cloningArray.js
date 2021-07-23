/* Write a JavaScript function to clone an array. */

// Here your code

function array_Clone(arraycloned) {
    return arraycloned.slice(0);    
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/* 
Expected output
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/