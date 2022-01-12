//  Write a program to take a day as an input and determine whether it is a weekday or weekend.
//    `Example: Tuesday is weekday.`

const daysInAWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const checkDay = day => {


    let index = -1
    for (let i = 0; i < daysInAWeek.length; i++) {
        if (daysInAWeek[i].toLowerCase() === day.toLowerCase()) {
            index = i
        }
    }

    switch (index) {
        case -1:
            console.log('Not a day');
            break;
        case 5:
        case 6:
            console.log(`${day} is weekend`);
            break;
        default:
            console.log(`${day} is weekday`);
            break;
    }
}

checkDay('sunday')