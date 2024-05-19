function getComputerChoice() {
    let weapons = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return weapons[choice];
}

console.log(getComputerChoice());