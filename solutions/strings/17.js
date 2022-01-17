// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string.There can be multiple spaces present after any word

const removeSpaces = str => {
    let newStr = '';

    for(const i in str){
        if(str[i] != ' '){
            newStr += str[i];
        }
    }

    return newStr;
}

console.log(removeSpaces('hello how are   you ?  '));