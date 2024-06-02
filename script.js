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
    if(playersChoice === 0) {
        if (win === undefined) {
            actionDisplay.innerHTML = "Draw! &#9994; vs &#9994;"
        } else if (win === false) {
            actionDisplay.innerHTML = "You lose! &#9995; beats &#9994;"
        } else if (win === true) {
            actionDisplay.innerHTML = "You win! &#9994; beats &#9996;"
        }
    } else if (playersChoice === 1) {
        if (win === undefined) {
            actionDisplay.innerHTML = "Draw! &#9995; vs &#9995;"
        } else if (win === false) {
            actionDisplay.innerHTML = "You lose! &#9996; beats &#9995;"
        } else if (win === true) {
            actionDisplay.innerHTML = "You win! &#9995; beats &#9994;"
        }
    } else if (playersChoice === 2) {
        if (win === undefined) {
            actionDisplay.innerHTML = "Draw! &#9996; vs &#9996;"
        } else if (win === false) {
            actionDisplay.innerHTML = "You lose! &#9994; beats &#9996;"
        } else if (win === true) {
            actionDisplay.innerHTML = "You win! &#9996; beats &#9995;"
        }
    }
    //Add display of "Next" button!
};