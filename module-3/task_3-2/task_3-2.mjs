"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows*/
let textPart1Line1 = "";
let textPart1Line2 = "";
for (let i=1, j = 10; i <= 10; i++, j--) {
    textPart1Line1 += " " + i;
    textPart1Line1 += ",";
    textPart1Line2 += " " + j;
    textPart1Line2 += ",";
} 
printOut(textPart1Line1);
printOut(textPart1Line2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the number once the "while" loop has completed. You do not need to print anything while the "while" loop is inprogress.//
let targetNumber = 45;
let guessedNumber = 0;

while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1; 
} 
printOut("The guessed number is: " + guessedNumber);



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Take the program from part 2 and expand it to guess a number between 1 and one million. Print the number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the Date.now() function to measure time.//
targetNumber = 450030;
guessedNumber = 0;
let guessCount = 0;
let startTime = Date.now();

while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1; 
    guessCount++;
}
let endTime = Date.now();
let timeTaken = endTime - startTime;

printOut("The guessed number is: " + guessedNumber);
printOut("Number of guesses: " + guessCount);
printOut("Time taken: " + timeTaken + "ms");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200. HINT: A prime number is any natural number greater than 1 that is only divisible by itself and 1. The number 1 is not a prime.//
let primes = [];
for (let num = 2; num < 200; num++) {
    let isPrime = true;
    let divisor = 2;
    while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        primes.push(num);
    } 
} 
printOut(primes.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textPart5 = "";
for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    textPart5 += line + newLine;
}

printOut(textPart5)
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive). For each grade, print the student's grade (A to F) based on the point distribution provided:// A: 89% – 100%, B: 77% – 88%, C: 65% – 76%, D: 53% – 64%, E: 41% – 52%, F: 0% – 40%, Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using an array. You can use a for loop and a do/while loop to achieve this. //
//Make printout so that the grades fall in descending order
printOut("Grades in descending order:");
const students = 5;
let grade1 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade2 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade3 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade4 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade5 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);

let grades = [
    { student: "Student1", grade: grade1 },
    { student: "Student2", grade: grade2 },
    { student: "Student3", grade: grade3 },
    { student: "Student4", grade: grade4 },
    { student: "Student5", grade: grade5 }
];

grades.sort((a, b) => b.grade - a.grade);

for (let i = 0; i < grades.length; i++) {
    let textPart6 = grades[i].student + ": " + grades[i].grade + "% - ";
    let gradeValue = parseFloat(grades[i].grade);
    if (gradeValue >= 89) {
        textPart6 += "A";
    } else if (gradeValue >= 77) {
        textPart6 += "B";
    } else if (gradeValue >= 65) {
        textPart6 += "C";
    } else if (gradeValue >= 53) {
        textPart6 += "D";
    } else if (gradeValue >= 41) {
        textPart6 += "E";
    } else {
        textPart6 += "F";
    }
    printOut(textPart6);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Simulate 6 dice and print how many "throws" it takes to get: 1 2 3 4 5 6 (full straight), 3 pairs, 2 of a kind and 4 of a kind (tower), All the same (Yahtzee)//
//Simulate 6 dice and print how many "throws" it takes to get: 1 2 3 4 5 6 (full straight), 3 pairs, 2 of a kind and 4 of a kind (tower), All the same (Yahtzee)//
let throwsStraight = 0;
let throwsThreePairs = 0;
let throwsTwoOfAKind = 0;
let throwsFourOfAKind = 0;
let throwsYahtzee = 0;

let foundStraight = false;
let foundThreePairs = false;
let foundTwoOfAKind = false;
let foundFourOfAKind = false;
let foundYahtzee = false;

while (!foundStraight || !foundThreePairs || !foundTwoOfAKind || !foundFourOfAKind || !foundYahtzee) {
    let dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    let counts = {};
    for (let die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }
    let countValues = Object.values(counts);

    if (!foundStraight) {
        throwsStraight++;
        if (Object.keys(counts).length === 6) {
            foundStraight = true;
        }
    }
    if (!foundThreePairs) {
        throwsThreePairs++;
        if (countValues.filter(count => count === 2).length === 3) {
            foundThreePairs = true;
        }
    }
    if (!foundTwoOfAKind) {
        throwsTwoOfAKind++;
        if (countValues.includes(2)) {
            foundTwoOfAKind = true;
        }
    }
    if (!foundFourOfAKind) {
        throwsFourOfAKind++;
        if (countValues.includes(4)) {
            foundFourOfAKind = true;
        }
    }
    if (!foundYahtzee) {
        throwsYahtzee++;
        if (countValues.includes(6)) {
            foundYahtzee = true;
        }
    }
}

printOut("Throws to get full straight (1-6): " + throwsStraight);
printOut("Throws to get 3 pairs: " + throwsThreePairs);
printOut("Throws to get 2 of a kind: " + throwsTwoOfAKind);
printOut("Throws to get 4 of a kind (tower): " + throwsFourOfAKind);
printOut("Throws to get Yahtzee (all the same): " + throwsYahtzee);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
