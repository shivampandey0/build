// For a given input string(str), write a function to print all the possible substrings.Without using substr method

const getSubstrings = str =>{
    for(let i=0;i<str.length;i++){
        console.log(str.slice(i))
        for(let j=i+1;j<str.length;j++){
            console.log(str.slice(i,j));
        }
    }
}

getSubstrings('shivam')