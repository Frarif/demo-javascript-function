// Input value from user
const width = parseInt(
  prompt(`Input width value of the rectangular (in meter): `)
);
const length = parseInt(
  prompt(`Input length value of the rectangular (in meter): `)
);

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
const dataUnits = [
  { name: "Km", rate: 1 / 1000 },
  { name: "Cm", rate: 100 },
  { name: "Mm", rate: 1000 },
];

const areaDataConverted = [];
const perimeterDataConverted = [];

// Loopings
for (let index = 0; index < dataUnits.length; index++) {
  const areaConvert = dataUnits[index];
  const areaConverted = {
    name: `${areaConvert.name}`,
    areaValue: areaResult * areaConvert.rate,
  };
  areaDataConverted[index] = areaConverted;
}

for (let index = 0; index < dataUnits.length; index++) {
  const perimeterConvert = dataUnits[index];
  const perimeterConverted = {
    name: `${perimeterConvert.name}`,
    perimeterValue: perimeterResult * perimeterConvert.rate,
  };
  perimeterDataConverted[index] = perimeterConverted;
}

// Display the result
for (let index = 0; index < areaDataConverted.length; index++) {
  const areaDataValue = areaDataConverted[index];
  const perimeterDataValue = perimeterDataConverted[index];
  console.log(
    `${areaResult} m is equal to ${areaDataValue.areaValue} ${areaDataValue.name} `
  );
  console.log(
    `${perimeterResult} m is equal to ${perimeterDataValue.perimeterValue} ${perimeterDataValue.name}`
  );
}
