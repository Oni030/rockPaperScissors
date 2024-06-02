// Retrieve elements from html
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

// Initialize the project + add EventListeners
document.addEventListener("DOMContentLoaded", function() {
    rockButton.addEventListener("click", getWinRock);
    paperButton.addEventListener("click", getWinPaper);
    scissorsButton.addEventListener("click", getWinScissors);
});

// Randomize computers-choice
// 0 = Rock, 1 = Paper, 2 = Scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
};

// Calculate winner if player selects rock
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
    //Add function-call to change the score
};

// Calculate winner if player selects paper
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
    //Add function-call to change the score
};

// Calculate winner if player selects scissors
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
    //Add function-call to change the score
};

// Display winner in .action-zone
function displayWinner(playersChoice, win) {
    buttonContainer.style.display = "none";
    playerChoice.style.display = "flex";
    computerChoice.style.display = "flex";
    nextButton.style.display = "flex";
    if(playersChoice === 0) {
        playerChoice.innerHTML = "Player: &#9994;";
        if (win === undefined) {
            computerChoice.innerHTML = "Computer: &#9994;";
            actionDisplay.innerHTML = "Draw!"
        } else if (win === false) {
            computerChoice.innerHTML = "Computer: &#9995;";
            actionDisplay.innerHTML = "You lose!"
        } else if (win === true) {
            computerChoice.innerHTML = "Computer: &#9996;";
            actionDisplay.innerHTML = "You win!"
        }
    } else if (playersChoice === 1) {
        playerChoice.innerHTML = "Player: &#9995;";
        if (win === undefined) {
            computerChoice.innerHTML = "Computer: &#9995;";
            actionDisplay.innerHTML = "Draw!"
        } else if (win === false) {
            computerChoice.innerHTML = "Computer: &#9996;";
            actionDisplay.innerHTML = "You lose!"
        } else if (win === true) {
            computerChoice.innerHTML = "Computer: &#9994;";
            actionDisplay.innerHTML = "You win!"
        }
    } else if (playersChoice === 2) {
        playerChoice.innerHTML = "Player: &#9996;";
        if (win === undefined) {
            computerChoice.innerHTML = "Computer: &#9996;";
            actionDisplay.innerHTML = "Draw!"
        } else if (win === false) {
            computerChoice.innerHTML = "Computer: &#9994;";
            actionDisplay.innerHTML = "You lose!"
        } else if (win === true) {
            computerChoice.innerHTML = "Computer: &#9995;";
            actionDisplay.innerHTML = "You win!"
        }
    }
};

function setNextGame() {
    buttonContainer.style.display = "flex";
    playerChoice.style.display = "none";
    computerChoice.style.display = "none";
    nextButton.style.display = "none";
    actionDisplay.innerHTML = "Choose Your Weapon!"
};