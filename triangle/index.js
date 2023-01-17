const baseValue = parseInt(prompt("Enter base value of triangle: "));
const heightValue = parseInt(prompt("Enter height value of triangle: "));

// calculate perimeter
// P = a + b + c
const perimeterValue = baseValue * 3;

// calculate area
// A = (h * b) / 2
const areaValue = (baseValue * heightValue) / 2;

console.log(`The area value of the triangle is ${areaValue}`);

console.log(`The perimeter value of the triangle is ${perimeterValue}`);
