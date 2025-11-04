"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 8;
printOut("Wake up time = " +  wakeUpTime);
/* If I wake up at exactly 7 o'clock, I can take the bus to school, otherwise if I wake up at exactly 8 o'clock, I can take the train, otherwise I have to take the car to school */
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 0;
printOut("Value = " + number );
if (number > 0) {
  printOut("value is positive");
} else if (number === 0) {
  printOut("Zero");
} else {
  printOut("value is Negative");
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
const imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Uploaded image size: " + imageSize + "MP");
if (imageSize <= 4)
{
  printOut("The image is too small");
} 
else if (imageSize >= 6)
{
  printOut("The image is too large");
} 
else 
{
  printOut("Thank you");
} 
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")) {
  printOut("Its " + monthName + ", you must take your vitamin D");
} else {
  printOut("Its " + monthName + ", you do not need to take your vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days;
switch (monthName) {
  case "April":
  case "June":
  case "September":
  case "November":
    days = 30;
    break;
  case "February":
    days = 28;   
    break;
  default:
    days = 31;
}
printOut("Number of days in " + monthName + " = " + days);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "March" || monthName === "May") { 
  printOut("Its " + monthName + ", the gallery is closed for refurbishment.");
} else if (monthName === "April") {
  printOut("Its " + monthName + ", the gallery is open in temporary premises next door.");
} else {
  printOut("Its " + monthName + ", the gallery is open as normal, Welcome!.");
}
printOut(newLine);
