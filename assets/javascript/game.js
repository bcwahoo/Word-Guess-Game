var wins = 0;
var losses = 0;
var numGusses = 4;

var library = [
  "touchdown",
  "quaterback",
  "fumble",
  "sack",
  "referee",
  "safety",
  "endzone"
];
var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksNletters = [];
var wrongGuess =[];


function startGame(){
  //Reset guess
  numGusses = 4;
  
  //select random word
  chosenWord = library[Math.floor(Math.random() * library.length)];
  
  //split letter
  letterInChosenWord = chosenWord.split("");
  
  //count the number of blanks needed
  numBlanks = letterInChosenWord.length;

  //testing
  console.log(chosenWord);

  //Resets the array for each round
  blanksNletters = [];
  wrongGuess = [];

  //Fills array with correct number of dashes
  for (var i = 0, i < numBlanks; i++){
    blanksNletters.push("_")
  }

  //Prints blanks in console
  console.log(blanksNletters)

  //Reprint the guesses
  document.getElementById("guesses-left").innerHTML = numGuesses;

  //Prints the blanks at the begining of the round
  document.getElementById("magic-word").innerHTML = blanksNletters.join(" ");

  //Clear the wrong guesses from the previous round
  document.getElementById("bad-word").innerHTML = wrongGuess.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var loop1 = 0; loop1 < numBlanks; i++) {
     if (chosenWord[loop1] === letter) {
       // If the letter exists then toggle this boolean to true. This will be used in the next step.
       letterInWord = true;
     }
  }

  //If letter exists find out where
  if (letterInWord){
    
    //Loop through  the word
    for (var loop2 = 0; loop2 < numBlanks; j++){

      //Populate the word array with the letter
      if (chosenWord[loop2] === letter){
        //Set the location of the match
        blanksNletters[loop2] = letter;
      }
    }
    //Log for Testing
    console.log(blanksNletters);
  }
  // If the letter doesn't exist at all...
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter);
    numGuesses--;
  } 
}

function roundComplete(){
  
}


document.onkeyup = function(event) {
  var userGuess = event.key;
  var largeGuess = userGuess.toUpperCase();
  var badWord = document.getElementById("bad-word");
  
  var largeLib = randomLib.toUpperCase();
  var magicWord = document.getElementById("magic-word");
 

  for (var i = 0; i < largeLib.length; i++) {
    answerArray[i] = "-";
  }
  var remainingLetters = largeLib.length;
  while (remainingLetters > 0) {
    magicWord.innerHTML = answerArray.join(" ");
    remainingLetters--;
  }

  for (var j = 0; j < largeLib.length; j++) {
    if (largeLib[j] === userGuess) {
      answerArray[j] = userGuess;
    } else {
      badArray[i] = badArray.push(largeGuess);
    }
    // console.log("hi");
    // badWord.textContent = largeGuess;
  }
};
