const base1Value = parseInt(prompt("Enter base1 value of trapezoid: "));
const base2Value = parseInt(prompt("Enter base2 value of trapezoid: "));
const heightValue = parseInt(prompt("Enter height value of trapezoid: "));

// calculate area

const areaValue = ((base1Value + base2Value) * heightValue) / 2;

console.log(`The area value of trapezoid is ${areaValue}`);
