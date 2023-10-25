function getComputerChoice() {
    // Generate and assign random integer between (0-2)
    let computerChoice = Math.floor((Math.random() * 100)) % 3;

    // Return choice message determined by generated integer (0-2)
    return computerChoice === 0 ? "Rock" 
         : computerChoice === 1 ? "Paper" 
         : "Scissors"
}