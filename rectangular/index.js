const breadthValue = parseInt(prompt("Enter breadth value: "));
const lengthValue = parseInt(prompt("Enter length value: "));

// calculate area

const perimeterValue = 2 * (lengthValue + breadthValue);
const areaValue = lengthValue * breadthValue;

console.log(`The perimeter value of rectangular is ${perimeterValue}`);

console.log(`The area value of rectangular is ${areaValue}`);
