// take input from the user
let side = prompt("Input side value: ");

// A = s * s
function areaRectangle() {
  area = side * side;
  return area;
}

// P = s * 4
function perimeterRectangle() {
  perimeter = side * 4;
  return perimeter;
}

// calling function
let areaResult = areaRectangle(side);
let perimeterResult = perimeterRectangle(side);

// display the result
console.log("The area value of the rectangle is " + areaResult);
console.log("The perimeter value of the rectangle is " + perimeterResult);
