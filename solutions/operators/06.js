// 1. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const monthsWith31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];

let has31Days = month => monthsWith31Days.some(item => item.toLowerCase() === month.toLowerCase()) ? `${month} has 31 days` : `${month} doesn't have 31 days`;

console.log(has31Days('march'))
console.log(has31Days('nove'))