// Write a Program to take a number input from user and find if the number is Prime or not. which can only be divided by themselves and 1


let checkPrime = num => {
    let isPrime = true
    if (num < 2)
       return `${num} is not Prime`
    else
        for (let i = 2; i < num; i++) {
            if (num % i === 0) isPrime = false
            break;
        }

    return isPrime ? `${num} is Prime` : `${num} is not Prime`
}

console.log(checkPrime(6));