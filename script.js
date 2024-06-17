const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const buttonContainer = document.querySelector(".button-container");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const actionDisplay = document.querySelector(".action-display");
const nextButton = document.querySelector(".next-button");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const resetButton = document.querySelector(".reset-button");

document.addEventListener("DOMContentLoaded", function() {
    rockButton.addEventListener("click", getWinRock);
    paperButton.addEventListener("click", getWinPaper);
    scissorsButton.addEventListener("click", getWinScissors);
    nextButton.addEventListener("click", setNextGame);
    resetButton.addEventListener("click", resetScore);
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
};

function getWinRock() {
    let computerChoice = getComputerChoice();
    let win;
    if (computerChoice === 0) {
        win = undefined;
    } else if (computerChoice === 1) {
        win = false;
    } else if (computerChoice === 2) {
        win = true;
    };
    displayWinner(0, win);
    setNewScore(win);
};

function getWinPaper() {
    let computerChoice = getComputerChoice();
    let win;
    if (computerChoice === 1) {
        win = undefined;
    } else if (computerChoice === 2) {
        win = false;
    } else if (computerChoice === 0) {
        win = true;
    };
    displayWinner(1, win);
    setNewScore(win);
};

function getWinScissors() {
    let computerChoice = getComputerChoice();
    let win;
    if (computerChoice === 2) {
        win = undefined;
    } else if (computerChoice === 0) {
        win = false;
    } else if (computerChoice === 1) {
        win = true;
    };
    displayWinner(2, win);
    setNewScore(win);
};

function displayWinner(playersChoice, win) {
    buttonContainer.style.display = "none";
    playerChoice.style.display = "flex";
    computerChoice.style.display = "flex";
    nextButton.style.display = "flex";
    
    const choices = [`&#9994;`, `&#9994;`, `&#9994;`];
    const computerChoices = {
        0: { undefined: 0, false: 1, true: 2 },
        1: { undefined: 1, false: 2, true: 0 },
        2: { undefined: 2, false: 0, true: 1 }
    };
    const results = {
        undefined: 'Draw!',
        false: 'You lose!',
        true: 'You win!'
    };

    playerChoice.textContent = `Player: ${choices[playersChoice]}`;
    computerChoice.textContent = `Computer: ${choices[computerChoices[playersChoice][win]]}`;
    actionDisplay.textContent = results[win];
};

function setNextGame() {
    buttonContainer.style.display = "flex";
    playerChoice.style.display = "none";
    computerChoice.style.display = "none";
    nextButton.style.display = "none";
    actionDisplay.innerHTML = "Choose Your Weapon!"
};

function setNewScore(win) {
    if (win === undefined) {
    } else 
    if (win === false) {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else
    if (win === true) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
};

function resetScore() {
    computerScore.textContent = 0;
    playerScore.textContent = 0;
};