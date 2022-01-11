// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (ang1,ang2,ang3) => {

    if (ang1 === ang2 && ang2 === ang3) {
        return 'Its a equilateral Triangle'
    }

    if (ang1 === ang2 || ang2===ang3 || ang1===ang3) {
        return 'Its a isosceles Triangle'
    }  

    return 'Its a scalene Triangle'

}

console.log(typeOfTriangle(30, 60, 30));