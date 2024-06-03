let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessRemain = 10;
document.getElementById('guessField').disabled = false;

function checkGuess() {
  const userGuess = document.getElementById('guessField').value;
  if (userGuess == "") {
    alert("Please enter a valid number. " + guessRemain + " guesses remaining.")
  } else if (userGuess == randomNumber) {
    guessCount ++;
    alert("Correct! Completed in " + guessCount + " guesses.")
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else if(userGuess > randomNumber) {
    guessRemain --;
    guessCount ++;
    alert("Too high. Try again. Guesses remaining: " + guessRemain)
  } else if(userGuess < randomNumber) {
    guessRemain --;
    guessCount ++;
    alert("Too low. Try again. Guesfses remaining: " + guessRemain)
  }
  if (guessRemain == 0) {
    alert("Game over (0 guesses remaining)")
    guessField.disabled = true;
    guessSubmit.disabled = true;
  }
}
