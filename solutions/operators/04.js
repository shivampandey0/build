// 1. Write a program to find the maximum out of three given numbers.The numbers are num1 = 8, num2 = 23 and num3 = 17.

let findMax = (num1, num2, num3) => num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3

console.log(findMax(8, 23, 17));

