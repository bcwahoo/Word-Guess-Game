

var library = ["touchdown", "quaterback", "fumble", "sack", "referee", "safety", "endzone"];
var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksNletters = [];
var wrongGuess = [];

//Game Counters
var wins = 0;
var losses = 0;
var numGuess = 4;


function startGame() {
  //Reset guess
  numGuess = 4;
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
  for (var loop = 0; loop < numBlanks; loop++) {
    blanksNletters.push("_");
  }
  //Prints blanks in console
  console.log(blanksNletters);
  //Reprint the guesses
  document.getElementById("guess-left").innerHTML = numGuess;
  //Prints the blanks at the begining of the round
  document.getElementById("magic-word").innerHTML = blanksNletters.join(" ");
  //Clear the wrong guesses from the previous round
  document.getElementById("bad-word").innerHTML = wrongGuess.join(" ");
}


function checkLetters(letterGuessed) {
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var loop1 = 0; loop1 < numBlanks; loop1++) {
    if (chosenWord[loop1] === letterGuessed) {
      letterInWord = true;
    }
  }

  //If letter exists find out where
  if (letterInWord) {
    //Loop through  the word
    for (var loop2 = 0; loop2 < numBlanks; loop2++) {
      //Populate the word array with the letter
      if (chosenWord[loop2] === letterGuessed) {
        //Set the location of the match
        blanksNletters[loop2] = letterGuessed;
      }
    }
    //Log for Testing
    console.log(blanksNletters);
  }
  // If the letter doesn't exist at all...
  else {

    wrongGuess.push(letterGuessed);
    numGuess--;
  }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + wins + " | LossCount: " + losses + " | Number of Guesses: " + numGuess);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guess-left").innerHTML = numGuess;
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("magic-word").innerHTML = blanksNletters.join(" ");
  // This will print the wrong guesses onto the page.
  document.getElementById("bad-word").innerHTML = wrongGuess.join(" ");

  // If we have gotten all the letters to match the solution...
  if (letterInChosenWord.toString() === blanksNletters.toString()) {
    // ..add to the win counter & give the user an alert.
    wins++;
    alert("You win!");

    // Update the win counter in the HTML & restart the game.
    document.getElementById("win-counter").innerHTML = wins;
    startGame();
  }

  // If we've run out of guesses..
  else if (numGuess === 0) {
    // Add to the loss counter.
    losses++;
    // Give the user an alert.
    alert("You lose");

    // Update the loss counter in the HTML.
    document.getElementById("loss-counter").innerHTML = losses;
    // Restart the game.
    startGame();
  }

}

// Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Check if the key pressed is a letter.
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // Converts all key clicks to lowercase letters.
    var letterGuessed = event.key.toLowerCase();
    // Runs the code to check for correctness.
    checkLetters(letterGuessed);
    // Runs the code after each round is done.
    roundComplete();
  }
}
