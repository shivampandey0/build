// Given two dates, your function should return which one comes before the other.
//     Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24 / 01 / 2021

const minDate = (date1, date2) => {
    const formattedDate1 = date1.split('/')
    const formattedDate2 = date2.split('/')

    if (isDateValid(...formattedDate1) && isDateValid(...formattedDate2)) {
        if (Date.parse(date1) < Date.parse(date2)) {
            return `${date1} comes before ${date2}`
        } else {
            return `${date2} comes before ${date1}`
        }
    } else {
        return `One of the date is invalid`
    }
}

const isDateValid = (day, month, year) => {
    let date = new Date(year, month, day);
    return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
}

console.log(minDate('02/05/2021', '24/01/2021'));