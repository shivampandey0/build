// Find number of constants and vowels in a string.

const getCount = str => {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;

    for (const i in str) {
        const char = str[i];
        if (char.toLowerCase() != char.toUpperCase()) {
              let isVowel = false;
               for (const vowel of vowelsArr) {
                   if(vowel.toLowerCase() === char.toLowerCase()) isVowel = true;
               }            
            isVowel ? vowelCount++ : consonantCount++;
        }
    }

    return `Vowels: ${vowelCount} Consontants: ${consonantCount}`;
}

console.log(getCount('hello there'));