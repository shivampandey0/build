// Find average of an array and display the output.

const getAvg = arr => {
    let sum = 0;
    for (const num of arr) { sum += num; }

    return (sum/arr.length).toFixed(2);
}

console.log(getAvg([10, 4, 5, 2, 5, 6, 9]));
