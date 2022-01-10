// 1. Write a program to take a number input from user and determine whether the number is odd or even.


// let oddOrEven = num => num % 2 ? 'odd' : 'even'; //works because 0 is a falsy value
let oddOrEven = num => num % 2 ===0 ? 'even' : 'odd'; //usual way of doing
console.log(oddOrEven(3));

