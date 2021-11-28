console.log("Hello JavaScripts");

// square code
console.group("square");
const squareside = 5;
console.log("The sides of the square measure: " + squareside + "cm");

const squareperimeter = squareside * 4;
console.log("The perimeter of square is: " + squareperimeter + "cm");

const squarearea = squareside * squareside;
console.log("The area of square is: " + squarearea + "cm2");
console.groupEnd();


// triangle code
console.group("triangle");
const triangleside1 = 6;
const triangleside2 = 6;
const trianglebase = 4;
const triangleheight = 5.5;
console.log(
    "The sides of the triangle measure: " 
    + triangleside1 
    + "cm, "
    + triangleside2 
    + "cm, "
    + trianglebase 
    + "cm"
);

console.log("The height of triangle is: " + triangleheight + "cm");

const triangleperimeter = triangleside1 + triangleside2 + trianglebase;
console.log("The perimeter of triangle is: " + triangleperimeter + "cm");

const trianglearea = (triangleheight * trianglebase) / 2;
console.log("The area of triangle is: " + trianglearea + "cm2");
console.groupEnd();


// circle code
console.group("circle");
const  circleradius = 4;
const circlediameter = circleradius * 2;
const PI = Math.PI;
console.log("The circle radius is: " + circleradius + "cm");

console.log("The circle diameter is: " + circlediameter + "cm");

console.log("The PI constant is: " + PI);

const circleperimeter = circlediameter * PI;
console.log("The perimeter of circle is: " + circleperimeter + "cm");

const circlearea = (circleradius * circleradius) * PI;
console.log("The area of circle is: " + circlearea + "cm2");
console.groupEnd();

