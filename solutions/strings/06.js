// Write a program to check whether the string is alphanumeric or not, eg:batman@45 contains digit 45

const checkAlphanumeric = str => {
    let isAlphanumeric = false;

    for(const i in str){
        if (!isNaN(str[i])) isAlphanumeric = true;
    }
    return isAlphanumeric ? `${str} is alphanumeric`: `${str} is not alphanumeric`;
}

console.log(checkAlphanumeric('batman@45'));
console.log(checkAlphanumeric('batman@'));