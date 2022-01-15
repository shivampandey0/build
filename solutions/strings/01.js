
// Write a program that converts the string into uppercase

const convertToUppercase1 = string => string.toUpperCase()

const convertToUppercase2 = str => {

    let newString = ''
    for(const i in str){
        newString = newString + str[i].toUpperCase()
    }
    return newString
}

console.log(convertToUppercase1('shivam'));
console.log(convertToUppercase2('shivam'));