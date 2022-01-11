// Given n numbers, your function should return the maximum of them all.The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3, 5) ––> Output: 5
// Input: findMax(3, 5, 9, 1) ––> Output: 9
//     (Hint: Lookup rest parameters in JavaScript)

let getMax = (...nums) => Math.max(...nums); 

console.log(getMax(3, 5, 9, 1));