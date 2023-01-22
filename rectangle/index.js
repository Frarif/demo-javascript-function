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

    console.log(`${areaResult} m² & ${perimeterResult} m`);
  } else {
    window.alert(`Please enter side value correctly`);
  }
}

runApp();
