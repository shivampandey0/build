// Shift an array by X to right.
//     Example[1, 2, 3, 4, 5] after shifting to right[5, 1, 2, 3, 4]

const shiftArrBy = (arr, x) => {
    let newArr = [];
    let shiftBy = x;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (shiftBy > 0) {
            newArr.push(arr[i]);
        }
        shiftBy--;
    }
    return newArr.concat(arr.slice(0, arr.length - x));
}

console.log(shiftArrBy([1, 2, 3, 4, 5], 2));
console.log(shiftArrBy([1, 2], 1));