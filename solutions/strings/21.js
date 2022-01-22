// Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. (input: string⇒"programming camp are amazing", word⇒ "programming"; output: " camp are amazing")

const removeWord = (str, word) => {
    let tempWord = '';
    let newStr = '';

    for (const i in str) {
        if(str[i].toLowerCase() != str[i].toUpperCase()){
            tempWord+=str[i];
        }else if(tempWord === word){
            tempWord ='';
            newStr+=str[i];
        }else{
            newStr += tempWord + str[i];            
            tempWord = '';
        }

        if (i == str.length-1 && tempWord!==word) newStr += tempWord;
        
    }

    return newStr;
}




console.log(removeWord("how are you, how was your day?", 'how'));
console.log(removeWord("how", 'how'));
console.log(removeWord("programming camp are amazing", 'programming'));


const removeWordNew = (str, word) => str.split(' ').filter(item => item !== word).join(' ');


console.log(removeWordNew("how are you, how was your day?", 'how'));
console.log(removeWord("how", 'how'));
console.log(removeWord("programming camp are amazing", 'programming'));