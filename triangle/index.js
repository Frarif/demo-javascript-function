// Input from user
let base = prompt(`Input base value of the triangle: `);
let height = prompt(`Input height value of the triangle: `);

// A = (b * h) / 2
function areaTriangle() {
  area = (base * height) / 2;
  return area;
}

// P = b * 3
function perimeterTriangle() {
  perimeter = base * 3;
  return perimeter;
}

// Calling function
let areaResult = areaTriangle();
let perimeterResult = perimeterTriangle();

// Display result
console.log("The area value of the rectangle is " + areaResult);
console.log("The perimeter value of the rectangle is " + perimeterResult);
