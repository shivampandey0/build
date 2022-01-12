// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
//     Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = sentence => sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ')

/* 1. Split the sentence by space it give an array of words
2. split each word in their own sub array 
3. now reverse the array in step 2
4. join reversed array of step 3 without space 
5. now join the array of step 4 with space */

console.log(reverseCharactersOfWord('we are neoGrammers'));