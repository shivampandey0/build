// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

//Area = (3√3 s2)/2; where 's' is the length of one side of the regular hexagon.

let areaOfHexagon = length => (3 * Math.sqrt(3) * Math.pow(length,2) / 2).toFixed(2)

console.log(areaOfHexagon(10))