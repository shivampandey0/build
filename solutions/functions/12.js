// Given two dates, your function should return which one comes before the other.
//     Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24 / 01 / 2021

const minDate = (date1,date2) => {
    console.log(Date.parse(date2),Date.parse(date1));
    if (Date.parse(date1) < Date.parse(date2)) {
        return `${date1} comes before ${date2}`
    }else{
        return `${date2} comes before ${date1}`
    }
}

console.log(minDate('02/05/2022', '02/31/2021'));