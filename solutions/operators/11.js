// Write a program to take an input from a user and find its Factorial.
//    `Example: Factorial of 5 is 120`



const findFactorial = num => {
    let factorial = 1;
    for (let i = num; i > 0; i--) factorial *= i
    console.log(factorial);
}

findFactorial(5)