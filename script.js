function computerPlay() {
    const selection = ['Rock', 'Paper', 'Scissors'];
    return selection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return "It's a Tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        return "You Win! Rock beats Scissors.";
    }

    if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return "It's a Tie!";
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore += 1;
        return "You Win! Paper beats Rock.";
    }

    if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return "It's a Tie!";
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        return "You Win! Scissors beats Paper.";
    }
}

function game() {
    let playerSelection;
    // while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    //     playerSelection = prompt('Rock, Paper or Scissors? (Type Correctly)').toLowerCase();
    // }

    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));


    console.log(`Player Score: ${playerScore}.`);
    console.log(`Computer Score: ${computerScore}.`);
    if (playerScore > computerScore) {
        console.log('You are the winner!');
    } else console.log('The Computer is the winner!');
}

let playerScore = 0;
let computerScore = 0;
game();