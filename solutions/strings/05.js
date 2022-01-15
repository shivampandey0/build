// Write a program to delete all vowels from a string.Assume string is not more than 80 characters long

const deleteVowels = str =>{
   let newStr ='';

   for(const i in str){
       const char = str[i];
       if (char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u') {
           newStr = newStr+ char;
       }
   }

   return newStr;
}

console.log(deleteVowels('shivam'));
console.log(deleteVowels('My name is Shivam Pandey'));