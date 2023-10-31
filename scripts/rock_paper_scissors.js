function game() {
    // Initialize both scores
    let playerScores = 0;
    let computerScores = 0;

    function getComputerChoice() {
        // Generate and assign random integer between (0-2)
        let computerChoice = Math.floor((Math.random() * 100)) % 3;
    
        // Return choice message determined by generated integer (0-2)
        return computerChoice === 0 ? "rock" 
             : computerChoice === 1 ? "paper" 
             : "scissors"
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
            winner = "none"
        } else if(playerSelection === "paper" && computerSelection === "rock") {
            resultMessage = "You win! Paper beat Rock";
            winner = "player"
        } else if(playerSelection === "paper" && computerSelection === "scissors") {
            resultMessage = "You lose! Scissors beat Paper";
            winner = "computer"
        } else if(playerSelection === "paper" && computerSelection === "paper") {
            resultMessage = "You tied! Both have Paper";
            winner = "none";
        } else if(playerSelection === "scissors" && computerSelection === "paper") {
            resultMessage = "You win! Scissors beat Paper";
            winner = "player"
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            resultMessage = "You lose! Rock beat Scissors";
            winner = "computer"
        } else if(playerSelection === "scissors" && computerSelection === "scissors") {
            resultMessage = "You tied! Both have Scissors";
            winner = "none"
        }
        
        return [resultMessage, winner];
    }

    // Play a round of game each time 1 of the 3 button was clicked
    const resultDiv = document.querySelector('.result');
    const selectButtons = document.querySelectorAll('.selectButton');
    selectButtons.forEach((selectButton) => {
        selectButton.addEventListener('click', (e) => {
            const playerSelection = e.target.textContent.toLowerCase();
            const computerSelection = getComputerChoice();

            const roundResult = playRound(playerSelection, computerSelection);
            const roundWinner = roundResult[1];
            if (roundWinner === "player") {
                playerScores += 1;
            } else if (roundWinner === "computer") {
                computerScores += 1;
            }

            const currentScores =`PlayerScores: ${playerScores}  ComputerScores: ${computerScores}`;
            resultDiv.textContent = `${roundResult[0]}, Winner this round: ${roundWinner}, Current Score: ${currentScores}`;

            // Print final result(winner,loser or tie)
            if (playerScores === 5) {
                resultDiv.textContent = `Final result: Player win! ${currentScores}`;
            } else if(computerScores === 5) {
                resultDiv.textContent = `Final Result: Computer win! ${currentScores}`;
            }
        });
    })
}

// Play the game until someone reach 5 point!
game();