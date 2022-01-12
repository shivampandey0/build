// Given a and b, your function should return the value of a power b
// Example:
// Input: power(2, 3) ––> Output: 8

let power = (a, b) => {
    let ans = 1
    for (let i = 1; i <= b; i++) {
        ans *= a
    }
    return ans
}

console.log(power(4, 2));
console.log(Math.pow(2, 0));