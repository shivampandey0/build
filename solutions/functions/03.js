// Given a sentence, your functions should return the number of words in the sentence.
//     Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

// let noOfWords = sentence => sentence.trim().split(' ').length
let noOfWords = sentence => {
    sentence = sentence.trim()
    let word =''
    let splittedArray=[]

    console.log(sentence);
    
    for(let i=0; i<=sentence.length;i++){
        console.log(word);
        if (sentence[i]=== ' ' || i === sentence.length) {
            splittedArray.push(word)
            word =''
        }else{
            word = word + sentence[i]
        }
    }

    console.log(splittedArray);
    return splittedArray.length
}

console.log(noOfWords('We are neoGrammers  '));