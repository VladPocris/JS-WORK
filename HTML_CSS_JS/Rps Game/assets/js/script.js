const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resultMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetBtn = document.getElementById("reset-game-btn");
const optionsContainer = document.querySelector(".options-container");


function computerPrediction() {
  return Math.floor(Math.random() * 3);
}

function winnerLogic(playerPrediction, computerPrediction) {
  if (playerPrediction === computerPrediction) {
    return {player: playerPrediction, computer: computerPrediction, winner: 0};
  } else if (playerPrediction === 0 && computerPrediction === 1) {
    return {player: playerPrediction, computer: computerPrediction, winner: -1};
  } else if (playerPrediction === 0 && computerPrediction === 2) {
    return {player: playerPrediction, computer: computerPrediction, winner: 1};
  } else if (playerPrediction === 1 && computerPrediction === 0) {
    return {player: playerPrediction, computer: computerPrediction, winner: 1};
  } else if (playerPrediction === 1 && computerPrediction === 2) {
    return {player: playerPrediction, computer: computerPrediction, winner: -1};
  } else if (playerPrediction === 2 && computerPrediction === 0) {
    return {player: playerPrediction, computer: computerPrediction, winner: -1};
  } else if (playerPrediction === 2 && computerPrediction === 1) {
    return {player: playerPrediction, computer: computerPrediction, winner: 1};
  }
}

function winnerMessage(playerPrediction) {
  const winner = winnerLogic(playerPrediction, computerPrediction());

  const moves = ["Rock", "Paper", "Scissors"];

  const playerMove = moves[winner.player];
  const computerMove = moves[winner.computer];


  if(winner.winner === 0) {
    return `It's a tie! Both chose ${playerMove}`;
  } else if(winner.winner === 1) {
    return [`Player wins! ${playerMove} beats ${computerMove}`, playerScore];
  } else {
    return [`Computer wins! ${playerMove} beats ${computerMove}`, computerScore];
  }
}

function uiUpdates(playerPrediction) {
  const result = winnerMessage(playerPrediction);

  if(typeof result != typeof String()) {
    resultMsg.textContent = result[0];
    if(result[1] === playerScore) {;
      playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if (result[1] === computerScore) {
      computerScore.textContent = Number(computerScore.textContent) + 1;
    }
  } else {
    resultMsg.textContent = result;
  }

  if(playerScore.textContent === "3") {
    optionsContainer.style.display = "none";
    winnerMsg.textContent = "Player has won the game!";
    resetBtn.style.display = "block";
  } else if (computerScore.textContent === "3") {
    optionsContainer.style.display = "none";
    winnerMsg.textContent = "Computer has won the game!";
    resetBtn.style.display = "block";
  }
}

function resetGame() {
  optionsContainer.style.display = "block";
  winnerMsg.textContent = "";
  resetBtn.style.display = "none";
  resultMsg.textContent = "";
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

function startGame() {
  rockBtn.addEventListener("click", () => {
    uiUpdates(0);
  });
  paperBtn.addEventListener("click", () => {
    uiUpdates(1);
  });
  scissorsBtn.addEventListener("click", () => {
    uiUpdates(2);
  });
  resetBtn.addEventListener("click", resetGame);
};

startGame();