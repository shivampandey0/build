// 1. Print the following star pattern: -

// *
// * * 
// * * * 
// * * * * 
// * * * * *

let pattern = () => {
    let current;
    for (let i = 1; i <= 5; i++) {
        current = ''
        for (let j = 1; j <= i; j++) {
            current += '*'
        }
        console.log(current);
    }
}
pattern()