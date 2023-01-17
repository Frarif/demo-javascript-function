const piValue = 3.14;
const radiusValue = parseInt(prompt("Enter radius value of circle: "));

// calculate perimeter
const perimeterValue = 2 * piValue * radiusValue;

// calculate area
const areaValue = piValue * (radiusValue * radiusValue);

console.log(`The perimeter value of circle is ${perimeterValue}`);
console.log(`The area value of circle is ${areaValue}`);
