// A = s * s
function areaRectangle(side) {
  if (side) {
    const area = side * side;
    const formattedResult = `${side} × ${side} = ${area} m²`;
    window.alert(formattedResult);
  } else {
    alert(`Enter side value`);
  }
}

function runCalculation() {
  const side = parseInt(prompt("Input side value (m): "));
  areaRectangle(side);
}
runCalculation();
