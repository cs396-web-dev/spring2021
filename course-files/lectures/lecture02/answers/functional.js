foreach(["h", "e", "l", "l", "o"], c => console.log(c));
console.log(map([1, 2, 3, 4, 5], n => n + 2));
console.log(filter([1, 2, 3, 4, 5], n => n < 3));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));

/* Edit the below functions: */

// Equivalent to `arr.forEach(c => f(c));`
function foreach(arr, f) {

}

// Equivalent to `arr.map(c => f(c))`
function map(arr, f) {
    return null;
}

// Equivalent to `arr.filter(c => f(c))`
function filter(arr, f) {
    return null;
}

// Equivalent to `arr.reduce((a, b) => f(a, b))`
// Assume numeric inputs
function reduce(arr, f) {
    return null;
}
