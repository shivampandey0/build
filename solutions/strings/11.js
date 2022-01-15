// Given a string, determine if it is a palindrome, considering only alphanumeric characters

const isPalindrome = str => {

    let reveresed = str.split("").reverse().join("");

    return reveresed === str ? `It's a palindrome`: `It's not a palindrome`;
}

console.log(isPalindrome('12321'));