// Program that reads string and count number of characters present in the string

const noOfCharacter = string => {
    let count=0

    for(const i in string){  
        // If want only letters 
        // const char = string[i];
        // if (char >='A' && char<='Z' || char >='a' && char <='z') {
        //      count++
        // } 
        count++           
    }
    return count
}

console.log(noOfCharacter('sHivam'));
console.log(noOfCharacter('sHiv4am'));
console.log(noOfCharacter('sHi-vam'));