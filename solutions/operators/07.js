// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".     Your output should look something like this `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 ..... `




 let printFizzBuzz = () => {
    for (let index = 1; index <= 100; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            if (index % 5 === 0) { console.log('Buzz'); } else
                if (index % 3 === 0) { console.log('Fizz'); } else {

                    console.log(index);
                }
        }
    }
} 


// More efficient solution learnt from Arnav, Coding Blocks


let printFizzBuzz = () => {
    let count3 = 0;
    let count5 = 0;
    for (let index = 1; index <= 100; index++) {
        count3++;
        count5++;
        let value='';
        if(count3 === 3) {value = 'fizz'; count3=0;}
        if(count5 === 5) {value = `${value}buzz`; count5=0;}

        if (value) {
            console.log(value);
        } else {
            console.log(index);
        }

    }
}



printFizzBuzz();

