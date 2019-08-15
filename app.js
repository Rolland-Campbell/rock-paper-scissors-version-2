let playerPick = null;

function computerChoose() {
  let computerPick = Math.random();
  if (computerPick < 0.34) {
    return "rock";
  } else if (computerPick <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function pickRock() {
  compChoice = computerChoose();
  //console.log(compChoice); -getting compChoice just fine
  playerPick = "rock";
  compare(playerPick, compChoice);
}

function pickPaper() {
  compChoice = computerChoose();
  //console.log(compChoice); -getting compChoice just fine
  playerPick = "paper";
  compare(playerPick, compChoice);
}

function pickScissors() {
  compChoice = computerChoose();
  //console.log(compChoice); -getting compChoice just fine
  playerPick = "scissors";
  compare(playerPick, compChoice);
}

let gameOutcome = document.getElementsByTagName("<h2>")

function compare(playerPick, computerPick) {
  //console.log(playerPick, computerPick); -getting both picks
  if (playerPick == "rock") {
    if (computerPick == "rock") {
      return console.log("It is a TIE!")
      //return gameOutcome.innerHTML = "Hello World!"
      //textContent = "It is a TIE!"
    }
  }
  if (playerPick == "paper") {
    if (computerPick == "rock") {
      return console.log("You LOSE!")
      //return gameOutcome.textContent = "You LOSE!"
    } else {
      return console.log("You WIN!")
      //return gameOutcome.textContent = "You WIN!"
    }
  }
  if (playerPick == "scissors") {
    if (computerPick == "paper") {
      return console.log("You WIN!")
      //return gameOutcome.textContent = "You WIN!"
    } else {
      return console.log("You LOSE!")
      //return gameOutcome.textContent = "You LOSE!"
    }
  }
}