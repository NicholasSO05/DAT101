"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that takes no parameters and returns no values. Have it print today's date in the Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource: toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to "toLocaleDateString".
function printNorwegianDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const NorwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(NorwegianDate);
} 
printNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
//only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
//powerful date object, ready for further manipulation.
function getTodayDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const NorwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(NorwegianDate);
    return today;
} 
function daysUntil2XKO() {
    const today = getTodayDate();
    const releaseDate = new Date('2025-05-14');
    const timeDifference = releaseDate - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    printOut("There is " + daysDifference + " days" + " until 2XKO's release!");
}
daysUntil2XKO();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that receives the radius of a circle and prints the diameter, circumference, and area.
function circleMetrics(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    printOut("For a circle with radius " + radius + ":");
    printOut("Diameter is " + diameter);
    printOut("Circumference is " + circumference.toFixed(2));
    printOut("Area is " + area.toFixed(2));
}
circleMetrics(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that receives the width and height of a rectangle in an object. Print the circumference
//and area of the given rectangle.
function rectangleMetrics(rectangle) {
    const circumference = 2 * (rectangle.width + rectangle.height);
    const area = rectangle.width * rectangle.height;
    printOut("For a rectangle the width is " + rectangle.width + " and the height is " + rectangle.height + ":");
    printOut("Circumference is " + circumference);
    printOut("Area is " + area);
}
rectangleMetrics({ width: 10, height: 5 });
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
//numbers and print all three combinations as integers (no decimals). Design the function to take two
//parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
//other two temperature types and print them. Formula:;
//Fahrenheit = (Kelvin − 273.15) · 9/5 + 32
//Celsius = Kelvin − 273.15
//Celsius = (Fahrenheit − 32) · 5/9
function convertTemperature(value, type) {
    let celsius, fahrenheit, kelvin;
    if (type === 'C') {
        celsius = value;
        fahrenheit = Math.round((value * 9/5) + 32);
        kelvin = Math.round(value + 273.15);
    } else if (type === 'F') {
        fahrenheit = value;
        celsius = Math.round((value - 32) * 5/9);
        kelvin = Math.round((value - 32) * 5/9 + 273.15);
    } else if (type === 'K') {
        kelvin = value;
        celsius = Math.round(value - 273.15);
        fahrenheit = Math.round((value - 273.15) * 9/5 + 32);
    } else {
        printOut("Invalid temperature type");
        return;
    }
    printOut(`Input in ${type} : ${value}°${type}`);
    printOut(`Celsius: ${celsius}°C`);
    printOut(`Fahrenheit: ${fahrenheit}°F`);
    printOut(`Kelvin: ${kelvin}K`);
}
convertTemperature(47, 'C');
convertTemperature(100, 'F');
convertTemperature(300, 'K');
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that calculates the price without VAT (sales tax).<br>
//The function needs two arguments,<br>
//one for the price including VAT (gross amount) and one for the tax group in text:<br>
//<ul>
//<li>normal = 25%</li>
//<li>food = 15%</li>
//<li>hotel, transport, and cinema = 10%</li>
//</ul>
//The text argument should not be case-sensitive.<br>
//If  the VAT group is not correct, the text "Unknown VAT group!" should be printed.<br>
//The function must return the price without tax, i.e., the net price.<br>
//Call the function four times with different gross amounts.<br>
//One for each of the VAT groups (25, 15, and 10) and one with an unknown group for example “goblins”.<br>
//Tip: Use "NaN" to identify that an unknown VAT group is returned from the function.<br>
//Formula: net = (100 * gross) / (vat + 100).
function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that takes 3 arguments and returns the following calculation:
//Speed = Distance / Time
//If speed is missing, calculate speed.
//If time is missing, calculate time.
//If distance is missing, calculate the distance.
//If more than one parameter is missing, return NaN.


function CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
    if (aSpeed === 0) {
        if( !aTime || aTime === 0 || aDistance === 0) {
            printOut("Invalid input");
            return NaN;
        }
        aSpeed = aDistance / aTime;
        printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
        return aSpeed;
        
    } else if (aTime === 0) {
        if ( !aSpeed || aSpeed === 0 || aDistance === 0) {
            printOut("Invalid input");
            return NaN;
        }
        aTime = aDistance / aSpeed;
        printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
        return aTime;
    } else if (aDistance === 0) {
        if ( !aSpeed || aTime ){
            printOut("Invalid input");
            return NaN;
        }
        aDistance = aSpeed * aTime;
        printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
        return aDistance;
    }
}
CalculateSpeedDistanceTime(100, 2, 0); // Calculate speed
CalculateSpeedDistanceTime(100, 0, 50); // Calculate time
CalculateSpeedDistanceTime(0, 2, 50); // Calculate distance
CalculateSpeedDistanceTime(0, 0, 50); // Invalid input
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
//two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
//Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
//maximum, make it larger with the specified character, either before or after, using the given boolean value.
//Have the function return the new string and print it out
function adjustStringLength(aText, aMaxSize, aChar, aInsertAtEnd) {
    let adjustedText = aText;
    let length = aText.length;
    while (length < aMaxSize) {
        if (aInsertAtEnd) {
            adjustedText += aChar; 
        } else {
            adjustedText = aChar + adjustedText; 
        }
        length++;   
    }
    printOut(`Adjusted Text: "${adjustedText}"`);
    return adjustedText;
}
adjustStringLength("Hello", 30, "*", true); // Insert at end
adjustStringLength("Hello", 25, "-", false); // Insert at beginning
adjustStringLength("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//From mathematics, we have the following expression:
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 +  2 =  3.           
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 +  5 +  6 =  7 +  8.
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 + 10 + 11 + 12 = 13 + 14 + 15.
//&nbsp;16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24.
//25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35.
//Create a function or functions that can test this expression for 200 lines.
// If the test fails, print out where the two sides are not equal and stop the loop.
// If all 200 lines are OK, print "Maths fun!".

function testMathExpression(aLines) {
    let currentNumber = 1;
    for (let line = 1; line <= aLines; line++) {
        let leftSum = 0;
        let rightSum = 0;
        // Calculate left side sum
        for (let i = 0; i < line; i++) {
            leftSum += currentNumber++;
        } 
        // Calculate right side sum
        for (let i = 0; i < line - 1; i++) {
            rightSum += currentNumber++;
        }
        if (leftSum !== rightSum) {
            printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
            return;
        }
    }
    printOut("Maths fun!");
}
testMathExpression(200);
printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Recursive function. Create a function that calculates the factorial of a given number.
//Factorial of 5 = 5 * 4 * 3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
//Have the function call itself to calculate the result and print the final answer.
//Print the result of each intermediate multiplication step as well.

let factorialIntSteps = "";
let factorialStep = 0;
function calculateFactorial(aNumber) {
    if (aNumber <= 1) {
        return 1;
    } else {
        const result = aNumber * calculateFactorial(aNumber - 1);
        factorialIntSteps += `Step ${factorialStep}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
        factorialStep++;
        return result;
    }
}
const numberToCalculate = 5;
const factorialResult = calculateFactorial(numberToCalculate);
printOut(`Factorial of ${numberToCalculate} is ${factorialResult}<br>`);
printOut("Intermediate Steps:<br>" + factorialIntSteps);
printOut(newLine);
