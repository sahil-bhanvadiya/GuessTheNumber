const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number", randomNumber);
let numGuesses = 0;
document.getElementById("bn").style.display = "none";

function checkGuess() {
  let myGuess = parseInt(guess.value);
  console.log(typeof myGuess);
  console.log(myGuess);

  if (myGuess == randomNumber) {
    feedback.textContent = "Your guess was " + myGuess + ". You got it right!";
    won.innerHTML = `You take ${numGuesses + 1} guesses to won`;
    document.getElementById("bn").style.display = "block";
    document.getElementById("submitGuess").style.display = "none";
    document.getElementById("cd").style.backgroundColor = "rgba(51, 255, 0, 0.315)";
    document.getElementById("image").src = "win.jpeg";

    document.getElementById("ld").innerHTML = `<img src="tenor (2).gif" width="200px" /> <br> <p style="font-size: 100px; text-align: center; color: #15ff00; animation: animate 2s linear infinite;">WON</P>`;
    document.getElementById("rd").innerHTML = `<img src="tenor (2).gif" width="200px" /> <br> <p style="font-size: 100px; text-align: center; color: #15ff00; animation: animate 2s linear infinite;">WON</P>`;
  } else if (myGuess > randomNumber) {
    feedback.textContent ="Your guess was " + myGuess + ". That's too high. Try Again!";
    document.getElementById("image").src = "high.jpeg";
    document.getElementById("cd").style.backgroundColor = "rgba(255, 0, 0, 0.315)";
    document.getElementById("ld").innerHTML = `<p id="blink" style="color: #eb1515; animation: animate 2s linear infinite;">TOO HIGH !!<p>`;
    document.getElementById("rd").innerHTML = `<p id="blink" style="color: #eb1515; animation: animate 2s linear infinite;">TOO HIGH !!<p>`;

  } else if (myGuess < randomNumber) {
    feedback.textContent ="Your guess was " + myGuess + ". That's too low. Try Again!";
    document.getElementById("image").src = "low.jpeg";
    document.getElementById("cd").style.backgroundColor = "rgba(0, 255, 242, 0.315)";
    document.getElementById("ld").innerHTML = `<p id="blink" style="color: #15ebe0; animation: animate 2s linear infinite;">TOO LOW !!<p>`;
    document.getElementById("rd").innerHTML = `<p id="blink" style="color: #15ebe0; animation: animate 2s linear infinite;">TOO LOW !!<p>`;
  }
  guess.value = "";

  inc();
}

submitGuess.addEventListener("click", checkGuess);

function inc() {
  numGuesses++;
}



