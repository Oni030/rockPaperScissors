// Retrieve elements from html
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const actionDisplay = document.querySelector(".action-display");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const resetButton = document.querySelector(".reset-button");

// Randomize computers-choice
// 0 = Rock, 1 = Paper, 2 = Scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
};

console.log(getComputerChoice());