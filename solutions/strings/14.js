// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

const maskString = str => {
   let maskedStr ='';

   for (const i in str) {
      if (i < str.length -4) {
          maskedStr += '#';
      }else{
          maskedStr = maskedStr + str[i];
      }
   }
   return maskedStr;
}

console.log(maskString('shivam'));
console.log(maskString('5565534276455423'));
