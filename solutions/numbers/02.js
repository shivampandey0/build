// Write a JavaScript program to calculate the simple interest given P, R, T with the given formula.Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P = 100, R = 6 %, T = 2
// Output: 12

const readline = require('readline-sync')

console.log('Simple Interest Calculator');
const p = Number(readline.question('Enter Principal:'))
const t = Number(readline.question('Enter Time:'))
const r = Number(readline.question('Enter Interest Rate:'))


console.log(`Simple Interest: ${(p * t * r) / 100}`);