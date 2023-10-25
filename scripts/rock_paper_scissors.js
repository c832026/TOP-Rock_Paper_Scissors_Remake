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

function playRound(playerSelection, computerSelection) {
    let resultMessage;
    let winner;

    // Determine the winner then get message
    if (playerSelection === "rock" && computerSelection === "scissors") {
        resultMessage = "You win! Rock beat Scissors";
        winner = "player"
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        resultMessage = "You lose! Paper beat Rock";
        winner = "computer"
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        resultMessage = "You tied! Both have Rock";
        winner = "player, computer"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        resultMessage = "You win! Paper beat Rock";
        winner = "player"
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        resultMessage = "You lose! Scissors beat Paper";
        winner = "computer"
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        resultMessage = "You tied! Both have Paper";
        winner = "player, computer";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        resultMessage = "You win! Scissors beat Paper";
        winner = "player"
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        resultMessage = "You lose! Rock beat Scissors";
        winner = "computer"
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        resultMessage = "You tied! Both have Scissors";
        winner = "player, computer"
    }

    return [resultMessage, winner];
}

function game() {
    // Initialize every scores
    let playerScores = 0;
    let computerScores = 0;
    let currentScores;
    
    // Play 5 rounds of the game and print the result of each round
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        const resultMessage = result[0];
        const winner = result[1];
        
        if (winner === "player") {
            playerScores += 1;
        } else if(winner === "computer") {
            computerScores += 1;
        } else {
            playerScores += 1;
            computerScores += 1;
        }

        currentScores = `Player: ${playerScores}, Computer: ${computerScores}`;

        console.log(resultMessage);
        console.log(currentScores);
    }  
    
    // Print final result(winner,loser or tie)
    if (playerScores > computerScores) {
        console.log("Final result: Player win!" + currentScores)
    } else if(computerScores > playerScores) {
        console.log("Final Result: Computer win!" + currentScores)
    } else {
        console.log("Final Result: It's a tie!" + currentScores);
    }
}

// play the game for 5 rounds
game();