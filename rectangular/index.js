// Input value from user
const width = parseInt(prompt(`Input width value of the rectangular (m): `));
const length = parseInt(prompt(`Input length value of the rectangular (m): `));

// (Area) A = w * l
function areaRectangular() {
  result = width * length;
  return result;
}

// (Perimeter) P = (w + l) * 2
function perimeterRectangular() {
  result = (width + length) * 2;
  return result;
}

// Call function
const areaResult = areaRectangular();
const perimeterResult = perimeterRectangular();

// Array
const areaDataUnits = [
  { name: "km²", multiplied: 1 / 1000000 },
  { name: "hm²", multiplied: 1 / 10000 },
  { name: "dam²", multiplied: 1 / 100 },
  { name: "dm²", multiplied: 100 },
  { name: "cm²", multiplied: 10000 },
  { name: "mm²", multiplied: 1000000 },
];

const perimeterDataUnits = [
  { name: "km", multiplied: 1 / 1000 },
  { name: "hm", multiplied: 1 / 100 },
  { name: "dam", multiplied: 1 / 10 },
  { name: "dm", multiplied: 10 },
  { name: "cm", multiplied: 100 },
  { name: "mm", multiplied: 1000 },
];

const areaDataConverted = [];
const perimeterDataConverted = [];

// Loopings
for (let index = 0; index < areaDataUnits.length; index++) {
  const areaConvert = areaDataUnits[index];
  const areaConverted = {
    name: `${areaConvert.name}`,
    areaValue: areaResult * areaConvert.multiplied,
  };
  areaDataConverted[index] = areaConverted;
}

for (let index = 0; index < perimeterDataUnits.length; index++) {
  const perimeterConvert = perimeterDataUnits[index];
  const perimeterConverted = {
    name: `${perimeterConvert.name}`,
    perimeterValue: perimeterResult * perimeterConvert.multiplied,
  };
  perimeterDataConverted[index] = perimeterConverted;
}

// Display the result
for (let index = 0; index < areaDataConverted.length; index++) {
  const areaDataValue = areaDataConverted[index];
  const perimeterDataValue = perimeterDataConverted[index];
  console.log(
    `The area ${areaResult} m² is equal to ${areaDataValue.areaValue} ${areaDataValue.name} `
  );
  console.log(
    `The perimeter ${perimeterResult} m is equal to ${perimeterDataValue.perimeterValue} ${perimeterDataValue.name}`
  );
}
