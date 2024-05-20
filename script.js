//Retrieve all elements from html

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const actionDisplay = document.querySelector(".action-display");
const playerScore = docuemnt.querySelector(".player-score");
const computerScore = docuemnt.querySelector(".computer-score");
const resetButton = document.getElementById("reset-button");

function getComputerChoice() {
    let weapons = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return weapons[choice];
}

console.log(getComputerChoice());