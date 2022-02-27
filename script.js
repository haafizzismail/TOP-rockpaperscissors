let playerScore = 0;
let computerScore = 0;


const playerDisplayScore = document.querySelector('.player-score');
const computerDisplayScore = document.querySelector('.computer-score');
const description = document.querySelector('.score-description');
const winner = document.querySelector('.modal-text');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const newGame = document.querySelector('.modal-button');
const playerRing = document.querySelector('.player-ring');
const computerRing = document.querySelector('.computer-ring');

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', game);
    button.addEventListener('click', playerRingSide);
});

newGame.addEventListener('click', restartGame);

function computerPlay() {
    const choices = ['stone', 'paper', 'scissors'];
    const selection = choices[Math.floor(Math.random() * 3)];
    computerRingSide(selection);
    return selection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === 'stone' && computerSelection === 'paper') {
        computerScore += 1;
        return "You Lose! Paper beats Stone.";
    } else if (playerSelection === 'stone' && computerSelection === 'scissors') {
        playerScore += 1;
        return "You Win! Stone beats Scissors.";
    }

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'stone') {
        playerScore += 1;
        return "You Win! Paper beats Stone.";
    }

    if (playerSelection === computerSelection) {
        return "Tie!";
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
    let computerSelection = computerPlay();
    let play = playRound(playerSelection, computerSelection);
    playerDisplayScore.textContent = playerScore;
    computerDisplayScore.textContent = computerScore;
    description.textContent = play;
    if (playerScore === 5) {
        modal.classList.add('active');
        overlay.classList.add('active');
        winner.textContent = 'You WIN!';
    } else if (computerScore === 5) {
        modal.classList.add('active');
        overlay.classList.add('active');
        winner.textContent = 'You LOSE!';
    }
}

function playerRingSide() {
    const imageHTML = `<img src="./img/${this.alt}.png" class="ring-image" alt="${this.alt}" draggable="false">`
    playerRing.innerHTML = imageHTML;
}

function computerRingSide(selection) {
    const imageHTML = `<img src="./img/${selection}.png" class="ring-image" alt="${selection}" draggable="false">`
    computerRing.innerHTML = imageHTML;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerDisplayScore.textContent = 0;
    computerDisplayScore.textContent = 0;
    description.textContent = 'Let the games begin!';
    modal.classList.remove('active');
    overlay.classList.remove('active');
}



