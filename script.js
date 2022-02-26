let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const selection = ['stone', 'paper', 'scissors'];
    return selection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === 'stone' && computerSelection === 'paper') {
        computerScore += 1;
        return "You Lose! Paper beats Stone.";
    } else if (playerSelection === 'stone' && computerSelection === 'scissors') {
        playerScore += 1;
        return "You Win! Stone beats Scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'stone') {
        playerScore += 1;
        return "You Win! Paper beats Stone.";
    }

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === 'scissors' && computerSelection === 'stone') {
        computerScore += 1;
        return "You Lose! Stone beats Scissors.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return "You Win! Scissors beats Paper.";
    }
}

function game(playerSelection) {
    playerSelection = this.alt;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    playerDisplayScore.textContent = playerScore;
    computerDisplayScore.textContent = computerScore;
    console.log(`Player Score: ${playerScore}.`);
    console.log(`Computer Score: ${computerScore}.`);
    if (playerScore === 5) {
        console.log('You are the winner!');
    } else if (computerScore === 5) {
        console.log('The Computer is the winner!');
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', game);
});

const playerDisplayScore = document.querySelector('.player-score');
const computerDisplayScore = document.querySelector('.computer-score');