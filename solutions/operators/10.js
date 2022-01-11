// 1. Write a program to return a Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21....


let printFibonacci = num => {
    let a = 0, b = 1, c;
    let series=[];
    for (let i = 1; i <=num; i++) {
       series.push(a)
       c = a+b;
       [a,b] = [b,c]
    }
    return series;
}

console.log(...printFibonacci(10));