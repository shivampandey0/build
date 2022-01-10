// 1. Write a program to find the maximum out of three given numbers.The numbers are num1 = 8, num2 = 23 and num3 = 17.

let findMax = (num1,num2,num3) => Math.max(num1,num2,num3);

console.log(findMin(8,23,17));


let getMax = (...nums) => Math.max(...nums); // rest and spread ki shaktiyon ka galat istemaal :p

console.log(getMin(8, 23, 17));