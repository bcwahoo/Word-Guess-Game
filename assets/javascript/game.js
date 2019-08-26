document.onkeyup = function (event) {

  var userGuess = event.key;
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
  var randomLib = library[Math.floor(Math.random() * library.length)];
  var largeLib = randomLib.toUpperCase();
  var magicWord = document.getElementById("magicWord");
  var answerArray = [];
  for (var i = 0; largeLib.length; i++) {
    answerArray[i] = "_";
  }
  var remainingLetters = largeLib.length;

  while (remainingLetters > 0) {
    magicWord.innerHTML = answerArray.join(" ");

    for (var j = 0; j < largeLib.length; j++) {
      if (largeLib[j] === userGuess) {
        answerArray[j] = userGuess.toUpperCase;
        remainingLetters--;
      }
    }
  };
};