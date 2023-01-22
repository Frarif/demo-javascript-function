// (Area) A = w * l
function calculateRectangularArea(width, length) {
  result = width * length;
  return result;
}

// (Perimeter) P = (w + l) * 2
function calculateRectangularPerimeter(width, length) {
  result = (width + length) * 2;
  return result;
}

function runApp() {
  // Input value from user
  const widthRectangularPrompt = Number(
    prompt(`Input width value of the rectangular (m): `)
  );
  const lengthRectangularPrompt = Number(
    prompt(`Input length value of the rectangular (m): `)
  );

  if (widthRectangularPrompt && lengthRectangularPrompt) {
    const areaResult = calculateRectangularArea(
      widthRectangularPrompt,
      lengthRectangularPrompt
    );
    const perimeterResult = calculateRectangularPerimeter(
      widthRectangularPrompt,
      lengthRectangularPrompt
    );

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
    console.log(`The Area`);
    for (let index = 0; index < areaDataConverted.length; index++) {
      const areaDataValue = areaDataConverted[index];
      console.log(
        `${areaResult} m² = ${areaDataValue.areaValue} ${areaDataValue.name} `
      );
    }

    console.log(`The Perimeter`);
    for (let index = 0; index < perimeterDataConverted.length; index++) {
      const perimeterDataValue = perimeterDataConverted[index];
      console.log(
        `${perimeterResult} m = ${perimeterDataValue.perimeterValue} ${perimeterDataValue.name}`
      );
    }
  } else {
    window.alert(`Please enter width and length`);
    console.log(`Please enter width and length properly`);
  }
}

runApp();
