const inputValue = confirm(`Are you sure want to input value ?`);

if (inputValue) {
  alert(`Please input the value`);
} else {
  alert(`OK, see you soon.`);
  areaTrapezoid.remove();
}

// Input value from user
const base1Value = parseInt(prompt("Enter base1 value of trapezoid (m): "));
const base2Value = parseInt(prompt("Enter base2 value of trapezoid (m): "));
const heightValue = parseInt(prompt("Enter height value of trapezoid (m): "));

// A = (b1 + b2) * h /2
function areaTrapezoid() {
  area = ((base1Value + base2Value) * heightValue) / 2;
  return area;
}

// Call function
areaResult = areaTrapezoid();

// Array
const areaDataUnits = [
  { name: "km²", multiplied: 1 / 1000000 },
  { name: "hm²", multiplied: 1 / 10000 },
  { name: "dam²", multiplied: 1 / 100 },
  { name: "dm²", multiplied: 100 },
  { name: "cm²", multiplied: 10000 },
  { name: "mm²", multiplied: 1000000 },
];

areaDataConverted = [];

// Loopings
for (let index = 0; index < areaDataUnits.length; index++) {
  const areaConvert = areaDataUnits[index];
  const areaConverted = {
    name: `${areaConvert.name}`,
    areaValue: areaResult * areaConvert.multiplied,
  };
  areaDataConverted[index] = areaConverted;
}

// Display the result
for (let index = 0; index < areaDataConverted.length; index++) {
  const areaDataValue = areaDataConverted[index];
  console.log(
    `The area ${areaResult} m² is equal to ${areaDataValue.areaValue} ${areaDataValue.name} `
  );
}
