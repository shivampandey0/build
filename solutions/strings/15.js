// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

const capitalizeFirst6 = str => {
    let count = 0;
    let newString = '';

    for (const i in str) {
        if (count != 6) newString = newString + str[i].toUpperCase();

        if (count == 6) {
            newString = newString + str.slice(i);
            break;
        }
        if (str[i].toLowerCase() != str[i].toUpperCase()) count++;

    }
    return newString;

}

console.log(capitalizeFirst6('tic tac toe is a fun game'));