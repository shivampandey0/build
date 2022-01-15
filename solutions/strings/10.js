// Write a program that takes two strings and copies smaller string into bigger string

const swapStrings = (str1,str2) => {
    console.log(str1.length > str2.length);
    if (str1.length > str2.length) {
        str2 =str1;
        console.log(str2);
    }else{
        str1= str2
        console.log(str1);
    }
}

swapStrings('shivam','iamshivam')