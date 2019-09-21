var wins;
var losses;
var library = [
  "touchdown",
  "interception",
  "fumble",
  "sack",
  "referee",
  "safety",
  "endzone"
];

document.onkeyup = function(event) {
  var userGuess = event.key;
  var largeGuess = userGuess.toUpperCase();
  var badWord = document.getElementById("badWord");
  var randomLib = library[Math.floor(Math.random() * library.length)];
  var largeLib = randomLib.toUpperCase();
  var magicWord = document.getElementById("magicWord");
  var answerArray = [];
  var badArray = [];
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
