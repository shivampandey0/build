// Find sum of an array and display the output.Example[10, 4, 5, 2, 5, 6, 9].


const getSum = arr => {
    let sum =0;
    for (const num of arr) { sum += num; }

    return sum;
}

console.log(getSum([10, 4, 5, 2, 5, 6, 9]));