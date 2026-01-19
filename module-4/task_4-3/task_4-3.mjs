"use strict"; 

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.
function cmbTask1CalculateClick() {
  const txtOutput = document.getElementById("txtOutput");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = parseFloat(txtRectHeight.value);
  const width = parseFloat(txtRectWidth.value);
  const perimeter = 2 * (height + width);
  const area = height * width;
  txtTask1Output.innerHTML = `width: ${width}, height: ${height}`;
  txtTask1Output.innerHTML += `<br/>Circumference = ${perimeter}, Area = ${area}`;
}
let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
//Every time the user presses "return" or "enter", add the word to the task2Words array and print how
//many words and all the words in txtTask2Output. Clear the input field every time the user presses
//"enter" or "return".
//Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)
function txtTask2WordKeyPress(aEvent) {
  const txtTask2Output = document.getElementById("txtTask2Output");
  //txtTask2Output.innerHTML = 'You pressed the key: ' + aEvent.key;
  if (aEvent.key === "Enter") {
    const word = txtTask2Word.value;
    task2Words.push(word);
    txtTask2Output.innerHTML ="You have entered " + task2Words.length + " words: <br/>";
    txtTask2Output.innerHTML += task2Words.join(", ");
    txtTask2Word.value = "";
  }
}
const txtTask2Word = document.getElementById("txtTask2Word");

txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
const task2Words = [];

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Create a click event function to check which of the checkboxes are selected. And print the result in
//txtTask3Output.
const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");
function cmbTask3CheckAnswerClick() {
  txtTask3Output.innerHTML = "";
  for (let i = 1; i < chkTask3.length; i++) {
    const chkBox = chkTask3[i];
    const text = `checkbox[${i}] =  ${chkBox.checked}`;
    txtTask3Output.innerHTML += text + "<br/>";
  }
}
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
//array. Print the selected car in txtTask4Output.
function rdbCarSelectChange(aEvent) {
  const txtTask4Output = document.getElementById("txtTask4Output");
  txtTask4Output.innerHTML = "You selected: " + aEvent.target.value;
}
const divTask4Cars = document.getElementById("divTask4Cars");
for (let i = 0; i < CarTypes.length; i++){
  const car = CarTypes[i];
  const inpRadio = document.createElement("input");
  inpRadio.type = "radio";
  inpRadio.name = "rdbCarName";
  inpRadio.value = car.value;
  inpRadio.id = "rdbCarName" + car.value;
  inpRadio.addEventListener("change", rdbCarSelectChange);
  const lblCaption = document.createElement("label");
  lblCaption.for = inpRadio.id;
  lblCaption.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendChild(inpRadio);
  divTask4Cars.appendChild(lblCaption);
  divTask4Cars.appendChild(document.createTextNode("br"));

  console.log('CarTypes[${i}].value = ${car.value}, CarTypes[${i}].caption = ${car.caption}');
}
//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Create an event function that occurs when the element selectTask5Animals changes value (change),
//and print the user's selection in the txtTask5Output element.
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function selectTask5AnimalsChange(aEvent){
  const selectedAnimal = aEvent.target.value;
  txtTask5Output.innerHTML = "You selected: " + selectedAnimal;
}
selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
//Create an event function in the same way as in task 5 and print the name the user selects in
//txtTask6Output.
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for(let i = 0; i < GirlsNames.length; i++){
  const girlName = GirlsNames[i];
  const optGirl = document.createElement("option");
  optGirl.value = girlName;
  optGirl.text = girlName;
  selectTask6Girls.appendChild(optGirl);
}

function selectTask6GirlsChange(aEvent){
  const selectedGirl = aEvent.target.value;
  txtTask6Output.innerHTML = "You selected: " + selectedGirl;
}
selectTask6Girls.addEventListener("change", selectTask6GirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
//director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
//"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.
const tblMovieList = document.getElementById("tblMovieList");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector")
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");
const tbsMovieBody = tblMovies.getElementsByTagName("tbody")[0];

function cmbAddMovieClick(){
  const movieTitle = txtMovieTitle.value;
  const movieGenreIndex = parseInt(selectMovieGenre.value);
  const movieGenre = MovieGenre[movieGenreIndex];
  const movieDirector = txtMovieDirector.value;
  const movieRate = txtMovieRate.value;
  const newRow = tbsMovieBody.insertRow();
  const cellTitle = newRow.insertCell();
  const cellGenre = newRow.insertCell();
  const cellDirector = newRow.insertCell();
  const cellRate = newRow.insertCell();
  cellTitle.innerHTML = movieTitle;
  cellGenre.innerHTML = movieGenre;
  cellDirector.innerHTML = movieDirector;
  cellRate.innerHTML = movieRate;
  // Clear input fields
  txtMovieTitle.value = "";
  selectMovieGenre.value = "0";
  txtMovieDirector.value = "";
  txtMovieRate.value = "";
}

for(let i = 0; i < MovieGenre.length; i++){
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(MovieGenre[i]));
  selectMovieGenre.appendChild(option);
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);
// Create three sample movies
txtMovieTitle.value = "The Shawshank Redemption";
selectMovieGenre.value = "7";
txtMovieDirector.value = "Frank Darabont";
txtMovieRate.value = "9.3";
cmbAddMovieClick();

txtMovieTitle.value = "The Godfather";
selectMovieGenre.value = "5";
txtMovieDirector.value = "Francis Ford Coppola";
txtMovieRate.value = "9.2";
cmbAddMovieClick();

txtMovieTitle.value = "The Dark Knight";
selectMovieGenre.value = "0";
txtMovieDirector.value = "Christopher Nolan";
txtMovieRate.value = "9.0";
cmbAddMovieClick();

// Prepare one new movie, for fast testing:
txtMovieTitle.value = "Inception";
selectMovieGenre.value = "17";
txtMovieDirector.value = "Christopher Nolan";
txtMovieRate.value = "8.8";