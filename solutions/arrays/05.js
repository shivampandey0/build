// Find sum of two arrays.
// [3, 5, 2, 9, 4] = 3 + 5 + 2 + 9 + 4 = 23
// [6, 2, 8, 1, 3] = 6 + 2 + 8 + 1 + 3 = 20
// Final Output: 20 + 23 = 43

const getSum = (arr1,arr2) => {

    let sum = 0;

    for (const num of arr1) {
        sum+=num;
    }
    for (const num of arr2) {
        sum += num;
    }

    return sum;
}

console.log(getSum([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]));