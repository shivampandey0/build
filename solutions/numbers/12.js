// Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is = 101


const decToBin = num => {
    let bin = '';
    let rem, i=1;

    while (num !== 0) {
        rem = num % 2;
        bin = rem + bin 
        num = parseInt(num/2)
    }
    return bin
}

console.log(decToBin(14));


// Follow up Question: Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in decimal

const octToDec = num => {
    let octNum = num.toString()
    let dec = 0
    let powr = 0

    for (let i = octNum.length - 1; i >= 0; i--) {
        dec = (octNum.charAt(i) * Math.pow(8, powr)) + dec
        powr++
    }
    return dec
}

console.log(octToDec(116));

