// A = s * s
function calculateRectangleArea(side) {
  const area = side * side;
  return area;
}

// P = s * 4
function calclateRectanglePerimeter(side) {
  const perimeter = side * 4;
  return perimeter;
}

function runApp() {
  const rectangleSidePrompt = parseInt(
    prompt(`Enter side value of the rectangle (m): `)
  );

  if (rectangleSidePrompt) {
    const areaResult = calculateRectangleArea(rectangleSidePrompt);
    const perimeterResult = calclateRectanglePerimeter(rectangleSidePrompt);

    console.log(`${areaResult} m² & ${perimeterResult} m`);
  } else {
    console.log(`Please enter side value correctly`);
  }
}

runApp();
