// Write a Program to Print N Odd Number in Descending Order.

//     Input : 4
// Output: 7
// 5
// 3
// 1

const getOddNumbers = num => {

    let result = ''
    let count = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 1 && count != num) {
            result = i + " " + result
            count++
        }
        if (count == num) break;
    }
    return result
}

console.log(getOddNumbers(4));