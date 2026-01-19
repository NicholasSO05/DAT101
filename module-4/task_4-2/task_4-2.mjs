"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printOut("Length = " + part1Array.length + " Verdi = " + part1Array[part1Array.length - 1]);
let part1Text = "";
for(let i = 0; i <  /*20*/ part1Array.length; /*i++*/ i = i + 1) {
    const value = part1Array[i]; // -> Every index of part1Array
    if (i === part1Array.length - 1) {
        part1Text += value.toString() + ".";
    } else {
    part1Text += value.toString() + ", ";
}
}
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2Text = part1Array.join(", ");
printOut(part2Text);    
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3greeting = "Hello there, how are you?";
const greetingArray = part3greeting.split(" ");
let part3Text =  "";
for(let i = 0; i < greetingArray.length; i++) {
    const word = greetingArray[i];
    // here you can remove any unwanted characters e.g: , ? et.
    part3Text += "Index:" + i.toString() + " = " + word + newLine; 
}
printOut(part3Text);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function removeNameFromArray(aArray, aName) {
    let deleteIndex = -1;
    for(let i = 0; i < aArray.length; i++) {
        const name = aArray[i];
        if (name === aName) {
        // Her kan vi slette elementet for eksemper "Hilde"
        // Dette gjør vi ikke her! Her løper vi gjennom og må slettes senere!
        // Vi må lagre indeksen i en variabel.
        deleteIndex = i;
        break; 
     }
 }
 // Teste om jeg kan slette
    if (deleteIndex >= 0) {
        printOut(aName + " is found, and deleted.")
        aArray.splice(deleteIndex, 1);
    }else{
        printOut(aName + " is not found");
    }
}

removeNameFromArray(girls, "Hilde")
printOut(girls);
printOut(newLine); 

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
//"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
//"Magnus" Merge the arrays with girl names and boy names into a new array with all the names.
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor","Magnus"];
const allNames = girls.concat(boys);
printOut(allNames);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a class named TBook
//Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
//"toString" in the class, it should return a text string that contains the three attributes of the class.
//Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
//in the list.
class TBook {
    #title
    #author
    #isbn
    constructor(aTitle, aAuthor, aIsbn) {
        this.#title = aTitle;
        this.#author = aAuthor;
        this.#isbn = aIsbn;
    }
    toString() {
        return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
    }
}

const book1 = new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
const book3 = new TBook("1984", "George Orwell", "9780451524935");

const booksArray = [book1, book2, book3];
for (let i = 0; i < booksArray.length; i++) {
    const book = booksArray[i];
    printOut(book.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays =  {
WeekDay1: {value:0x01, name: "Mandag"},
WeekDay2: {value:0x02, name: "Tirsdag"},
WeekDay3: {value:0x04, name: "Onsdag"}, 
WeekDay4: {value:0x08, name: "Torsdag"},
WeekDay5: {value:0x10, name: "Fredag"},
WeekDay6: {value:0x20, name: "Lørdag"},
WeekDay7: {value:0x40, name: "Søndag"},
Workdays: {
    value:0x01 + 0x02 + 0x04 + 0x08 + 0x10,
    name: "Arbeidsdager"
},

Weekends: {
    value: 0x20 + 0x40,
    name: "Helger"
}
} 
//Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the EWeekDays object.
//Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object
const weekDaysKeys = Object.keys(EWeekDays);
let part7Text = "";
for (const key of weekDaysKeys) {
    const day = EWeekDays[key];
    part7Text += `${key}, Name: ${day.name}, Value: ${day.value}` + newLine;
}
printOut(part7Text);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
//and descending order. To get full credit for this task, it must be solved with "callback" functions that you
//use in the .sort(...) method of this array.
const randomNumbers = [];
for (let i = 0; i < 35; i++) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    randomNumbers.push(randomNumber);
}
printOut("Original array: " + randomNumbers.join(", "));
const ascendingNumbers = [...randomNumbers].sort((a, b) => a - b);
printOut("Ascending order: " + ascendingNumbers.join(", "));
const descendingNumbers = [...randomNumbers].sort((a, b) => b - a);
printOut("Descending order: " + descendingNumbers.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Based on part 8, print out how many times the different numbers occur in the array. First, print the
//numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
//print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
//it should again be sorted from the smallest to the largest number.
const frequencyMap = new Map();
for (const number of randomNumbers) {
    if (frequencyMap.has(number)) {
        frequencyMap.set(number, frequencyMap.get(number) + 1);
    } else {
        frequencyMap.set(number, 1);
    }
}
let part9Text1 = "Number frequencies:" + newLine;
for (const [number, frequency] of frequencyMap.entries()) {
    part9Text1 += `Number ${number} occurs ${frequency} times` + newLine;
}
printOut(part9Text1);

const frequencyToNumbersMap = new Map();
for (const [number, frequency] of frequencyMap.entries()) {
    if (frequencyToNumbersMap.has(frequency)) {
        frequencyToNumbersMap.get(frequency).push(number);
    } else {
        frequencyToNumbersMap.set(frequency, [number]);
    }
}
const sortedFrequencies = Array.from(frequencyToNumbersMap.keys()).sort((a, b) => b - a);
let part9Text2 = "Frequencies to numbers:" + newLine;
for (const frequency of sortedFrequencies) {
    const numbers = frequencyToNumbersMap.get(frequency).sort((a, b) => a - b);
    part9Text2 += `Frequency ${frequency} corresponds to numbers: ${numbers.join(", ")}` + newLine;
}
printOut(part9Text2);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
//loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
//column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
//Hint: For each round in the loop for the rows, you create a column. And for each round in the
//columns, you write the "cell" value.
const rows = 5;
const cols = 9;
const matrix = [];
for (let r = 0; r < rows; r++) {
    const rowArray = [];
    for (let c = 0; c < cols; c++) {
        rowArray.push(`Row ${r} Col ${c}`);
    }
    matrix.push(rowArray);
}
let part10Text = "";
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        part10Text += matrix[r][c] + " | ";
    }
    part10Text += newLine;
}
printOut(part10Text);
printOut(newLine);
