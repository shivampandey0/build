// A program that reads three strings and prints the longest and smallest one

const getLongSmall = (str1,str2,str3)=>{
    let longest,smallest;
   
    if (str1.length > str2.length && str1.length > str3.length) {
        longest =str1
    }else if (str2.length>str1.length && str2.length > str3.length) {
        longest=str2
    }else{
        longest=str3
    }

    if (str1.length < str2.length && str1.length < str3.length) {
        smallest = str1
    } else if (str2.length < str1.length && str2.length < str3.length) {
        smallest = str2
    } else {
        smallest = str3
    }

    return `Smallest -> ${smallest}\nLongest -> ${longest}`;
}

console.log(getLongSmall('shivam pandey','i am shivam pandey','my name is shivam pandey'));