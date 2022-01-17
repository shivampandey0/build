// Reverse the given string word wise.That is, the last word in given string should come at 1st place, last second word at 2nd place and so on.Individual words should remain as it is.example: Input: Welcome to NeoG Camp → Camp NeoG to Welcome


const reverseString = str => {
    let newStr = '';
    let tempArr = [];

    for (const i in str) {
        if (str[i] != ' ') newStr += str[i];
        
        if (str[i] == ' ' || i == str.length - 1) {
            tempArr.push(newStr);
            newStr = ''
        }
    }

    for (let i = 0; i < tempArr.length; i++) {
        newStr = tempArr[i] + ' ' + newStr ;
    }

    return newStr;
}

console.log(reverseString('Welcome to NeoG Camp'));