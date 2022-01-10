// 1. Write a program to find the minimum out of three given numbers.The numbers are num1 = 35, num2 = 29 and num3 = 46.

let findMin = (num1, num2, num3) => Math.min(num1, num2, num3);

console.log(findMin(35, 29, 46));


let getMin = (...nums) => Math.min(...nums); // rest and spread ki shaktiyon ka galat istemaal :p

console.log(getMin(35, 29, 46));