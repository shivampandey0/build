// Write a program to convert Fahrenheit to Celsius.For Fahrenheit to Celsius conversion use: C = (F - 32) * 5 / 9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

//     Input: 56
// Output: 13.33333

const toCelsius = temperature => `${((temperature-32)*(5/9)).toFixed(2)} C`

console.log(toCelsius(56));