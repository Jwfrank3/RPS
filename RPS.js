const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let wins = 0;
let loses = 0;
let ties = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("div");
const gameScore = document.querySelector(".score");

rockButton.addEventListener("click", () => playGame(rock));
paperButton.addEventListener("click", () => playGame(paper));
scissorsButton.addEventListener("click", () => playGame(scissors));

function score() {
  if (wins > loses && (wins + loses + ties >= 5)) {
    gameScore.innerText = `You Win! wins: ${wins}, loses: ${loses}, ties: ${ties}`;
  } else if (loses > wins && (wins + loses + ties >= 5)) {
    gameScore.innerText = `You lose! wins: ${wins}, loses: ${loses}, ties: ${ties}`;
  } else if ((wins === loses) && (ties + wins + loses >= 5)) {
    gameScore.innerText = `Tied Game! wins: ${wins}, loses: ${loses}, ties: ${ties}`;
  } else {
    gameScore.innerText = `wins: ${wins}, loses: ${loses}, ties: ${ties}`;
  }
}

function computerMove() {
  let random = Math.random();

  if (random < 0.33) {
    return rock;
  } else if (random < 0.66) {
    return paper;
  } else if (random < 1) {
    return scissors;
  }
}

function playGame(userInput) {
  let opponent = computerMove();

  if (userInput === rock && opponent === scissors) {
    result.innerText = "Rock crushes Scissors";
    return score(wins++);
  } else if (userInput === rock && opponent === paper) {
    result.innerText = "Rock wrapped by Paper";
    return score(loses++);
  } else if (userInput === rock && opponent === rock) {
    result.innerText = "Rock tied with Rock";
    return score(ties++);
  } else if (userInput === paper && opponent === rock) {
    result.innerText = "Paper wraps Rock";
    return score(wins++);
  } else if (userInput === paper && opponent === scissors) {
    result.innerText = "Paper cut by Scissors";
    return score(loses++);
  } else if (userInput === paper && opponent === paper) {
    result.innerText = "Paper tied with Paper";
    return score(ties++);
  } else if (userInput === scissors && opponent === paper) {
    result.innerText = "scissors cuts Paper";
    return score(wins++);
  } else if (userInput === scissors && opponent === rock) {
    result.innerText = "Scissors crushed by Rock";
    return score(loses++);
  } else if (userInput === scissors && opponent === scissors) {
    result.innerText = "Scissors tied with Scissors";
    return score(ties++);
  }
}
