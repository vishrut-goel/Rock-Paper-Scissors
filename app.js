const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_WIN = "WIN";
const RESULT_LOSE = "LOSE";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const playerChoice = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    playerChoice !== ROCK &&
    playerChoice !== SCISSORS &&
    playerChoice !== PAPER
  ) {
    alert("We will choose for you - We have chosen Rock");
    return DEFAULT_USER_CHOICE;
  }
  return playerChoice;
};

const getComputerChoice = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return ROCK;
  }
  if (randomNumber < 0.66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (playerSelection, computerSelection) => {
  if (
    (playerSelection == ROCK && computerSelection == SCISSORS) ||
    (playerSelection == PAPER && computerSelection == ROCK) ||
    (playerSelection == SCISSORS && computerSelection == PAPER)
  ) {
    return RESULT_WIN;
  } else if (playerSelection == computerSelection) {
    return RESULT_DRAW;
  } else {
    return RESULT_LOSE;
  }
};

const printWinner = (winner, pSelection, cSelection) => {
  let message = `You chose ${pSelection} and computer chose ${cSelection}.`;
  if (winner == RESULT_WIN) {
    message = messsage + ` You win!`;
  } else if (winner == RESULT_DRAW) {
    message = message + ` You draw!`;
  } else {
    message = message + ` You lose!`;
  }
  return message;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting!");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  const logWinner = printWinner(winner, playerSelection, computerSelection);
  alert(logWinner);
  gameIsRunning = false;
});
