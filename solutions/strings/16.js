// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string


const replace = (str,c1,c2) => {
    let newStr = ''

    for(const i in str){
       if(str[i] == c1){
           newStr = newStr + c2;
       }else{
           newStr = newStr + str[i];
       }
    }
    return newStr;
}

console.log(replace('hello how are you?','o','i'));