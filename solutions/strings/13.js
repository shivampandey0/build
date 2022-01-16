// Write a program that removes the time from the given date string "Wed April 15, 7pm".It should return only the date without the time.

const removeTime = date => date.split(',')[0];

console.log(removeTime("Wed April 15, 7pm"));


const returnDate = date => {
   let newDate ='';
   for (const i in date) {
       if(date[i] == ',') break;
        newDate = newDate + date[i]           
   }
   return newDate;
}

console.log(returnDate("Wed April 15, 7pm"));
