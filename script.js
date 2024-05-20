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

// Calculate winner if player selects rock
function getWinRock() {
    let computerChoice = getComputerChoice();
    if (computerChoice === 0) {
        return undefined;
    } else if (computerChoice === 1) {
        return false;
    } else if (computerChoice === 2) {
        return true;
    };
};

// Calculate winner if player selects paper
function getWinPaper() {
    let computerChoice = getComputerChoice();
    if (computerChoice === 1) {
        return undefined;
    } else if (computerChoice === 2) {
        return false;
    } else if (computerChoice === 0) {
        return true;
    };
};

// Calculate winner if player selects scissors
function getWinScissors() {
    let computerChoice = getComputerChoice();
    if (computerChoice === 2) {
        return undefined;
    } else if (computerChoice === 0) {
        return false;
    } else if (computerChoice === 1) {
        return true;
    };
};

// Display winner in .action-zone
function displayWinner(pc, win) {
    if(pc === 0) {
        if (win === undefined) {
            actionDisplay.value = "Draw! &#9994; vs &#9994;"
        } else if (win === false) {
            actionDisplay.value = "You lose! &#9995; beats &#9994;"
        } else if (win === true) {
            actionDisplay.value = "You win! &#9994; beats &#9996;"
        }
    } else if (pc === 1) {
        if (win === undefined) {
            actionDisplay.value = "Draw! &#9995; vs &#9995;"
        } else if (win === false) {
            actionDisplay.value = "You lose! &#9996; beats &#9995;"
        } else if (win === true) {
            actionDisplay.value = "You win! &#9995; beats &#9994;"
        }
    } else if (pc === 2) {
        if (win === undefined) {
            actionDisplay.value = "Draw! &#9996; vs &#9996;"
        } else if (win === false) {
            actionDisplay.value = "You lose! &#9994; beats &#9996;"
        } else if (win === true) {
            actionDisplay.value = "You win! &#9996; beats &#9995;"
        }
    }
    //Add display of "Next" button!
}