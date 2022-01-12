// Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum: 60

// Preferebly run on replit.com

const readline = require('readline-sync')

const num1 =  Number(readline.question('Number 1:'))
const num2 =  Number(readline.question('Number 2:'))

console.log(`Sum: ${num1 + num2}`);