// A program that counts number of vowels and consonants in a String ?

const getCounts = string => {
    const vowelsArr =['a','e','i','o','u'];
    let vowels =0;
    let consonants =0;

    for(const i in string){
        if (string[i] >= 'A' && string[i] <= 'Z' || string[i] >= 'a' && string[i] <= 'z') {            
            vowelsArr.includes(string[i]) ? vowels++ : consonants++;
        }
    }

    return `'${string}' has:\nVowels -> ${vowels}\nConsonants -> ${consonants}`
}

console.log(getCounts('my name is shivam pandey'));