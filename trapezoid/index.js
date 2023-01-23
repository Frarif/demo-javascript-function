// A = (b1 + b2) * h /2
function calculateTrapezoidArea(base1, base2, height) {
  area = ((base1 + base2) * height) / 2;
  return area;
}

function runApp() {
  // Input value from user
  const trapezoidBase1Prompt = Number(
    prompt("Enter base1 value of trapezoid (m): ")
  );
  const trapezoidBase2Prompt = Number(
    prompt("Enter base2 value of trapezoid (m): ")
  );
  const trapezoidHeightPrompt = Number(
    prompt("Enter height value of trapezoid (m): ")
  );

  if (trapezoidBase1Prompt && trapezoidBase2Prompt && trapezoidHeightPrompt) {
    const areaResult = calculateTrapezoidArea(
      trapezoidBase1Prompt,
      trapezoidBase2Prompt,
      trapezoidHeightPrompt
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

    const areaDataConverted = [];

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
    console.log(`The Area`);
    for (let index = 0; index < areaDataConverted.length; index++) {
      const areaDataValue = areaDataConverted[index];
      console.log(
        `${areaResult.toFixed(1)} m² = ${areaDataValue.areaValue.toFixed(1)} ${
          areaDataValue.name
        } `
      );
    }
  } else {
    window.alert(`Please enter value`);
    console.log(`Please enter value properly!`);
  }
}

runApp();
