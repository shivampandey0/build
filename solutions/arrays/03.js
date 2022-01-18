// Find maximum and minimum of an array.

const getMinMax = arr => {
    let min;
    let max;

    for(const num of arr){
        min = min <= num? min : num;
        max = max >= num? max : num; 
    }

    return `Min: ${min} Max: ${max}`;
}

console.log(getMinMax([10,0, 4, 5, 2, 5, 86, -9]));