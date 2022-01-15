// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

const checkString = str => {
   let count =0;

   for (const letter in str) count++;   

   return count > 7;
}

console.log(checkString('shivam'));
console.log(checkString('accesibility'));