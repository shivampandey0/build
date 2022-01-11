// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1, 3, 5], [2, 4, 6]) ––> Output: [1, 3, 5, 2, 4, 6]

const mergeArray = (args1,args2) => args1.concat(args2)

console.log(mergeArray([1, 3, 5], [2, 4, 6]));