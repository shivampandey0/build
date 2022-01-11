// Given a sentence, your functions should return the number of words in the sentence.
//     Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

let noOfWords = sentence => sentence.trim().split(' ').length

console.log(noOfWords('We are neoGrammers  '));