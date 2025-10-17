"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// original expression
const original = 2 + 3 * 2 - 4 * 6; 
const modified = 2 + (3 * (2 - 4)) * 6;
printOut("2 + (3 * (2 - 4)) * 6 =" + modified);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//convert 25 metres and 34 centimeters to inches
const meters = 25;
const centimeters = 34;

//step 1: convert metres to centimeters
const totalmillimeters = (meters * 1000) + (centimeters * 10);

//step 2: convert centimeters to inches
const inches = totalmillimeters / 25.4;

//step 3: round to 2 decimal places
const roundedInches = inches.toFixed(2);

//print out the result
printOut ("25 meters and 34 centimeters is equal to " + roundedInches + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//convert 3 days, 12 hours, 14 minutes and 45 seconds to minutes
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

//step 1: convert days to minutes
const totalMinutesFromDays = days * 24 * 60;

//step 2: convert hours to minutes
const totalMinutesFromHours = hours * 60;

//step 3: convert seconds to minutes
const totalMinutesFromSeconds = seconds / 60;

//step 4: sum all minutes
const totalMinutes = totalMinutesFromDays + totalMinutesFromHours + minutes + totalMinutesFromSeconds;

//print out the result
printOut("3 days, 12 hours, 14 minutes and 45 seconds is equal to " + totalMinutes.toFixed(2) + " minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//convert 6,322.52 minutes to days, hours, minutes and seconds
const totalMinutesToConvert = 6322.52;

//step 1: calculate days
const daysFromMinutes = Math.floor(totalMinutesToConvert / (24 * 60));
const remainingMinutesAfterDays = totalMinutesToConvert % (24 * 60);

//step 2: calculate hours
const hoursFromMinutes = Math.floor(remainingMinutesAfterDays / 60);
const remainingMinutesAfterDaysAndHours = remainingMinutesAfterDays % 60;

//step 3: calculate minutes
const minutesFromMinutes = Math.floor(remainingMinutesAfterDaysAndHours);

//step 4: calculate seconds
const secondsFromMinutes = Math.round((remainingMinutesAfterDaysAndHours - minutesFromMinutes) * 60);

//print out the result
printOut("6.322.52 minutes is equal to " + daysFromMinutes + " days " + hoursFromMinutes + " hours " + minutesFromMinutes + " minutes and " + secondsFromMinutes + " seconds.");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//convert 54 dollars to norwegian kroner, and print the price of both
const dollars = 54;
const exchangeRate = 10.25; //1 dollar = 10.25 NOK

//step 1: convert dollars to NOK
const nok = dollars * exchangeRate;

//print out the result
printOut("54 dollars is equal to " + nok.toFixed(2) + " Norwegian kroner.");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//create a variable that contains the following text: "There is much between heaven and earth that we do not understand. Print the number of characters in the text. Print the character at position 19. Print the characters staring at number 35 and 8 characters forward. Print the index at which "earth" starts in the text
const text = "There is much between heaven and earth that we do not understand";

//step 1: print the number of characters in the text minus spaces
const nospaces = text.replaceAll(" ", "").length;

printOut("number of characters in the text (excluding spaces): " + nospaces);

//step 2: print the characters at position 19
const characterAt19 = text.charAt(19);
printOut("character at position 19: " + characterAt19);

//step 3: print the characters starting at number 35 and 8 characters forward
const substringFrom35 = text.substr(35, 8);
printOut("characters from position 35 and 8 characters forward: " + substringFrom35);

//step 4: print the index at which "earth" starts in the text
const indexOfEarth = text.indexOf("earth");
printOut("index at which 'earth' starts: " + indexOfEarth);

//print out the result  
printOut("Text: " + text);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//Comparison, print the values of the following expressions (evaluate whether the statements are true):
//is 5 greater than 3?
//is 7 greater than or equal to 7?
//is "a" greater than "b"?
//is "1" less than "a"?
//is "2500" less than "abcd"?
//"arne" is not equal to "thomas"?
//(2 equals 5) is this statement true?
//("abcd" is greater than "bcd") is this statement true?

printOut("is 5 greater than 3? " + (5 > 3));
printOut("is 7 greater than or equal to 7? " + (7 >= 7));
printOut("is \"a\" greater than \"b\"? " + ("a" > "b"));
printOut("is '1' less than 'a'? " + ('1' < 'a'));
printOut('is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('is "arne" not equal to "thomas"? ' + ("arne" != "thomas"));
printOut("is (2 equals 5) true? " + (2 == 5));
printOut('is ("abcd" is greater than "bcd") false? ' + ("abcd" > "bcd" == false ));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
//convert and print the following expressions: "from text "254" to a number", "from text to "57.23" to a number", "from text "25 kroner" to a number".
const text1 = "254";
const text2 = "57.23";
const text3 = "25 kroner";

//step 1: convert text "254" to a number
const number1 = Number(text1);
printOut('convert text "254" to a number: ' + number1);
//step 2: convert text "57.23" to a number
const number2 = Number(text2);
printOut('convert text "57.23" to a number: ' + number2);
//step 3: conver text "25 kroner" to a number
const number3 = parseFloat(text3);
printOut('convert text "25 kroner" to a number: ' + number3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
//create a variable "r" and randomly generate number from 1 to 360 (1 >= r <= 360)
const r = Math.floor(Math.random() * 360)
printOut("Random number between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//Use modulus (%) to calculate how many weeks and days are in 131 days.
const totalDays = 131;

//step 1: calculate weeks
const weeks = Math.floor(totalDays / 7);
const remainingDays = totalDays % 7;

printOut("131 days is equal to " + weeks + " weeks and " + remainingDays + " days.");
printOut(newLine);