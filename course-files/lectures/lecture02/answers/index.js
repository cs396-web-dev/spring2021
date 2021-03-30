console.log("Hello, World!");
listPrint(["line1", "line2", "line3"]);
fibonacci(12);

/* Edit the below functions: */

function listPrint(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

function fibonacci(n) {
    if (n === 1) {
        return [1];
    }
    const nums = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        nums.push(nums[i] + nums[i + 1]);
    }
    console.log(nums)
}
