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

//not sure what to do here. I am still pretty hazy on this
function pickRock() {
  computerChoose();
  playerPick = "rock";
  compare();
}

let gameOutcome = document.querySelector("Who will WIN")

function compare(playerPick, computerPick) {
  if (playerPick == "rock") {
    if (computerPick == "rock") {
      return gameOutcome.textContent = "It is a TIE!"
    }
  }
  if (playerPick == "paper") {
    if (computerPick == "rock") {
      return gameOutcome.textContent = "You LOSE!"
    } else {
      return gameOutcome.textContent = "You WIN!"
    }
  }
  if (playerPick == "scissors") {
    if (computerPick == "paper") {
      return gameOutcome.textContent = "You WIN!"
    } else {
      return gameOutcome.textContent = "You LOSE!"
    }
  }
}