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

//let gameOutcome = document.getElementsByTagName("<h2>")
let gameResult = document.getElementById("game-results")

function compare(playerPick, computerPick) {
  //console.log(playerPick, computerPick); -getting both picks
  if (playerPick == "rock") {
    if (computerPick == "paper") {
      gameResult.textContent = "Your opponent chose: " + computerPick + " You LOSE!"
      return console.log(computerPick, "You LOSE!")
    } else if (computerPick == "scissors") {
      gameResult.textContent = "Your opponent chose: " + computerPick + " You Win!"
      return console.log(computerPick, "You WIN!")
    } else {
      gameResult.textContent = "Your opponent chose: " + computerPick + " It is a TIE!"
      return console.log(computerPick, "It is a TIE!")
    }
  }
  if (playerPick == "paper") {
    if (computerPick == "rock") {
      gameResult.textContent = "Your opponent chose: " + computerPick + " You WIN!"
      return console.log(computerPick, "You WIN!")
    } else if (computerPick == "scissors") {
      gameResult.textContent = "Your opponent chose: " + computerPick + " You LOSE!"
      return console.log(computerPick, "You LOSE!")
    } else {
      gameResult.textContent = "Your opponent chose: " + computerPick + " It is a TIE!"
      return console.log(computerPick, "It is a TIE!")
    }
  }
  if (playerPick == "scissors") {
    if (computerPick == "paper") {
      gameResult.textContent = "Your opponent chose: " + computerPick + " You WIN!"
      return console.log(computerPick, "You WIN!")
    } else if (computerPick == "rock") {
      gameResult.textContent = "Your opponent chose: " + computerPick + " You LOSE!"
      return console.log(computerPick, "You LOSE!")
    } else {
      gameResult.textContent = "Your opponent chose: " + computerPick + " It is a TIE!"
      return console.log(computerPick, "It is a TIE!")
    }
  }
}