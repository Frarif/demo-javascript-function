// A = s * s
function calculateRectangleArea(side) {
  const area = side * side;
  return area;
}

// P = s * 4
function calculateRectanglePerimeter(side) {
  const perimeter = side * 4;
  return perimeter;
}

function runApp() {
  const rectangleSidePrompt = Number(
    prompt(`Enter side value of the rectangle (m): `)
  );

  if (rectangleSidePrompt) {
    const areaResult = calculateRectangleArea(rectangleSidePrompt);
    const perimeterResult = calculateRectanglePerimeter(rectangleSidePrompt);

    const areaDataUnits = [
      { name: "km²", multiplier: 1 / 1000000 },
      { name: "hm²", multiplier: 1 / 10000 },
      { name: "dam²", multiplier: 1 / 100 },
      { name: "dm²", multiplier: 100 },
      { name: "cm²", multiplier: 10000 },
      { name: "mm²", multiplier: 1000000 },
    ];

    const perimeterDataUnits = [
      { name: "km", multiplier: 1 / 1000 },
      { name: "hm", multiplier: 1 / 100 },
      { name: "dam", multiplier: 1 / 10 },
      { name: "dm", multiplier: 10 },
      { name: "cm", multiplier: 100 },
      { name: "mm", multiplier: 1000 },
    ];

    const dataAreaConverted = [];
    const dataPerimeterConverted = [];

    // Loopings
    for (let index = 0; index < areaDataUnits.length; index++) {
      const areaConvert = areaDataUnits[index];
      const areaConverted = {
        name: `${areaConvert.name}`,
        areaValue: areaResult * areaConvert.multiplier,
      };
      dataAreaConverted[index] = areaConverted;
    }

    for (let index = 0; index < perimeterDataUnits.length; index++) {
      const perimeterConvert = perimeterDataUnits[index];
      const perimeterConverted = {
        name: `${perimeterConvert.name}`,
        perimeterValue: perimeterResult * perimeterConvert.multiplier,
      };
      dataPerimeterConverted[index] = perimeterConverted;
    }

    // Display the result
    console.log(`The Area`);
    for (let index = 0; index < dataAreaConverted.length; index++) {
      const areaDataValue = dataAreaConverted[index];
      console.log(
        `${areaResult} m² = ${areaDataValue.areaValue} ${areaDataValue.name} `
      );
    }

    console.log(`The Perimeter`);
    for (let index = 0; index < dataPerimeterConverted.length; index++) {
      const perimeterDataValue = dataPerimeterConverted[index];
      console.log(
        `${perimeterResult} m = ${perimeterDataValue.perimeterValue} ${perimeterDataValue.name}`
      );
    }
  } else {
    window.alert(`Please enter value`);
    console.log(`Please enter side value correctly!`);
  }
}

runApp();
