// Write a program to calculate sum of N natural digits, as input by the users ?

// Enter a positive integer: 100
// Sum = 5050


const getSum = digits => {
    let sum = 0
    for (let i = 0; i <= digits; i++) sum += i
    return sum
}


console.log(getSum(100));
