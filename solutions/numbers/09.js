// Write a JavaScript program to compute the sum of all digits that occur in a given string.

//     Input: 1234
// Output: 1 + 2 + 3 + 4 = 10

const getSum = str => {

    if (!Number(str)) return 'incorrect number string'
    
    let sum = 0
    for (let i = 0; i < str.length; i++) sum += Number(str.charAt(i))
    return sum
}

console.log(getSum('1234'));