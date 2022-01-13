// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

//     Example -

//     Enter a Number: 1234
// Enter the Number of Rotations: 2
// Output: 3412

const rotate = (num, r) => {
    let newNum = ''
    let numStr = num.toString()

    for (i = 1; i <= r; i++) {
        newNum = numStr.charAt(numStr.length - 1) + numStr.slice(0, -1)
        numStr = newNum
    }
    return Number(newNum)
}

console.log(rotate(1234, 2));
console.log(rotate(1234, 3));