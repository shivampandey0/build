// Write a JavaScript program that reverses a number.

//     Example:

// Input: 32243;
// Output: 34223

const reverseIt = num => {
    let newNum = ''

    for (let i = 0; i < num.toString().length; i++) {
        newNum = num.toString().charAt(i) + newNum
    }
    return Number(newNum)
}

console.log(reverseIt(32243));