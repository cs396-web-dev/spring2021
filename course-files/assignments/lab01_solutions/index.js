console.log("Hello, World!");
listPrint(["line1", "line2", "line3"]);
fibonacci(12);

/* Edit the below functions: */

function listPrint(arr) {
    for (const ele of arr) {
        console.log(ele);
    }
}

function fibonacci(n) {
    fibNums = [0, 1];
    for (i = 2; i < n; i++) {
        fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
    }
    console.log(fibNums);
}
