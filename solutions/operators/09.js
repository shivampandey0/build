// 1. Write a program to take a number input from user and print multiplication table 12 times for that number.

let printTable = num => {
    for(let i=1;i<=12;i++){
        console.log(`${num} * ${i} = `,num*i);
    }
}

printTable(8)