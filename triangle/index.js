// A = (b * h) / 2
function calculateTriangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// P = b * 3
function calculateTrianglePerimeter(base) {
  const perimeter = base * 3;
  return perimeter;
}

function runApp() {
  // Input from user
  const triangleBasePrompt = Number(
    prompt(`Enter base value of the triangle (m): `)
  );
  const triangleHeightPrompt = Number(
    prompt(`Enter height value of the triangle (m): `)
  );

  if (triangleBasePrompt && triangleHeightPrompt) {
    const areaResult = calculateTriangleArea(
      triangleBasePrompt,
      triangleHeightPrompt
    );
    const perimeterResult = calculateTrianglePerimeter(triangleBasePrompt);

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
        `${areaResult.toFixed(1)} m² = ${areaDataValue.areaValue.toFixed(1)} ${
          areaDataValue.name
        } `
      );
    }

    console.log(`The Perimeter`);
    for (let index = 0; index < dataPerimeterConverted.length; index++) {
      const perimeterDataValue = dataPerimeterConverted[index];
      console.log(
        `${perimeterResult.toFixed(
          2
        )} m = ${perimeterDataValue.perimeterValue.toFixed(2)} ${
          perimeterDataValue.name
        }`
      );
    }
  } else {
    window.alert(`Please enter base and height`);
    console.log(`Please enter base and height properly!`);
  }
}

runApp();
