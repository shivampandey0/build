// A program that counts the value of each character and prints the most repeated character ?

const getMaxChar = str => {
    let obj = {};
    let maxChar = '';
    let count = 0;

    for (const i in str) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1;
        }
    } 

    for (const [key, value] of Object.entries(obj)) {
        if (count < value) maxChar = key;
        count = count < value ? value : count;
    }
     
    return `${maxChar} is the most repeated character with ${count} repetition`
}


console.log(getMaxChar('Welcome to neoGcamp'));