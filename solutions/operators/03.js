// 1. Write a program to find the maximum and minimum out of two given numbers.The numbers are num1 = 129 and num2 = 251.

let findMinMax = (num1,num2) => {
    let max = Math.max(num1,num2)
    return `Max: ${max} Min: ${max===num1?num2:num1}`
}

console.log(findMinMax(251,129));