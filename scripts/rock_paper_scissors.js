function getComputerChoice() {
    // Generate and assign random integer between (0-2)
    let computerChoice = Math.floor((Math.random() * 100)) % 3;

    // Return choice message determined by generated integer (0-2)
    return computerChoice === 0 ? "rock" 
         : computerChoice === 1 ? "paper" 
         : "scissors"
}

function getPlayerSelection() {
    let playerSelection = prompt("Make a play!(Rock, Paper, Scissors)");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

const playerSelection = getPlayerSelection();