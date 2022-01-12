// 1. Write a program to find the maximum and minimum out of two given numbers.The numbers are num1 = 129 and num2 = 251.


let findMinMax = (num1, num2) => {

    if (num1 === num2) return 'both are equal'

    if (num1 < num2) {
        return `Max: ${num2} Min: ${num1}`
    } else {
        return `Min: ${num2} Max: ${num1}`
    }
}

console.log(findMinMax(21, 1));