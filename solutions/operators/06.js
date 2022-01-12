// 1. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const monthsWith31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];

let has31Days = month => {

    let ans = `${month} doesn't have 31 days`
    for (let i = 0; i < monthsWith31Days.length; i++) {
        if (monthsWith31Days[i].toLowerCase() === month.toLowerCase()) {
            ans = `${month} has 31 days`
            break;
        }
    }
    return ans;
}

console.log(has31Days('march'))
console.log(has31Days('nove'))