// Write a program to toggle case of each alternate character of the string "good afternoon"(example: "neogcamp" ⇒ "nEoGcAmP")


const toggleChars = str => {
    let newStr = '';
    let count = 0;

    for (const i in str) {
        if (str[i] != ' ') {
            newStr += count % 2 == 1 ? str[i].toUpperCase() : str[i];
            count++;
        } else {
            newStr += ' ';
            count = 0;
        }
    }

    return newStr;
}

console.log(toggleChars('neogcamp'));
console.log(toggleChars('good afternoon'));