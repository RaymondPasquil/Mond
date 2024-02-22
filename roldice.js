function rollDice() {
  var guess = parseInt(document.getElementById('guess').value);
  var diceRoll = Math.floor(Math.random() * 6) + 1;

  var resultText = document.getElementById('result');
  var dice = document.getElementById('dice');

  if (guess >= 1 && guess <= 6){
      

      
    // Display the rolled number with animation
    dice.style.visibility = 'visible';
    dice.textContent = '?';
    setTimeout(function() {
      dice.textContent = diceRoll;
    }, 100);
      
          if (guess === diceRoll) {
      resultText.textContent = "Congratulations, you guessed correctly!";
    } else {
      resultText.textContent = "Sorry, better luck next time.";
    }
      
  } else{
      resultText.textContent = "Please enter a number between 1 and 6.";
  }
}
