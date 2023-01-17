// Input value from user
const width = prompt(`Input width value of the rectangular (in meter): `);
const length = prompt(`Input length value of the rectangular (in meter): `);

// (Area) A = w * l
function areaRectangular() {
  result = width * length;
  return result;
}

// (Peimeter) P = (w + l) * 2
function perimeterRectangular() {
  result = (width + length) * 2;
  return result;
}

// Call function
const areaResult = areaRectangular();
const perimeterResult = perimeterRectangle();

const dataUnits = [
  { name: "kilometer", rate: 1 / 1000 },
  { name: "centimeter", rate: 100 },
  { name: "milimeter", rate: 1000 },
];

const dataConvertedUnits = [];

// Loopings
for (let index = 0; index < array.length; index++) {
  const convert = dataUnits[index];
  const converted = {
    name: `${convert.name}`,
    areaValue: areaResult * convert.rate,
    perimeterValue: perimeterResult * convert.rate,
  };
  dataConvertedUnits[index] = converted;
}

// Display the result
for (let index = 0; index < array.length; index++) {
  const dataConverted = dataConvertedUnits[index];
  console.log(
    `${areaResult} M & ${perimeterResult} equal is to ${dataConverted.areaValue} ${dataConverted.name} & ${dataConverted.perimeterValue} ${dataConverted.name} `
  );
}
