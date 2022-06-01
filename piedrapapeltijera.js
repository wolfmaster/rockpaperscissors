const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let userScore= 0;
let compScore= 0;

const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption){
  

    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Choosing...";

    const interval = setInterval(function(){
      const machineOption = calcMachineOption();
      machineImg.src = "img/" + machineOption + ".png";
    }, 200);

    setTimeout(function() {

      clearInterval(interval);

    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    machineImg.src = "img/" + machineOption+ ".png";


    switch(result){
        case TIE:
            resultText.innerHTML = "It's a TIE!";
            break;
        case WIN:
            resultText.innerHTML = "You WIN!";
            break;
        case LOST:
            resultText.innerHTML = "You LOSE!";
            break;
    }
    
}, 2000);

}

function calcMachineOption(){
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

function calcResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;

  } else if (userOption === PAPER) {

    if (machineOption === SCISSORS) return LOST;
    if (machineOption === ROCK) return WIN;

  } else if (userOption === SCISSORS) {

    if (machineOption === ROCK) return LOST;
    if (machineOption === PAPER) return WIN;

}

/*
}
function ganar(calcResult) {
  if (calcResult = LOST ) {
    compScore++;
  } else if (calcResult = WIN ) {
    userScore++;
}
}

/*

function ganar(userOption, machineOption){
  userScore++;
 
}

function pierda(opcionUser, opcionPc){
  compScore++;
  compScore_span.innerHTML= compScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertirLetra(opcionPc)+smallPc+" le gana a "+convertirLetra(opcionUser)+smallUser+".<br> Tu perdiste";
  const userChoice_div= document.getElementById(opcionUser);
  const pcChoice_div= document.getElementById(opcionPc);
  userChoice_div.classList.add('rojo');
  pcChoice_div.classList.add('verde');
  setTimeout(function(){
    userChoice_div.classList.remove("rojo");
    pcChoice_div.classList.remove("verde");
  }, 2000);
}

function empate(opcionUser){
  result_div.innerHTML= "Ambos eligierón "+convertirLetra(opcionUser)+".<br> Es un empate!!";
  const opcion_div= document.getElementById(opcionUser);
  opcion_div.classList.add('gris');
  setTimeout(function(){
    opcion_div.classList.remove("gris");
  }, 2000);
}

/*

function game(opcion){
  const movidaPc= movidaComp();
  const movidaUser= opcion;
  switch (movidaUser+movidaPc) {
    case 'rt':
    case 'pr':
    case 'tp':
      ganar(movidaUser, movidaPc);
    break;
    case 'rp':
    case 'pt':
    case 'tr':
      pierda(movidaUser, movidaPc);
    break;
    case 'rr':
    case 'pp':
    case 'tt':
      empate(movidaUser);
    break;
  }
}

function main(){
  piedra_div.addEventListener('click', () => game("r"));
  papel_div.addEventListener('click', () => game("p"));
  tijera_div.addEventListener('click', () => game("t"));
}
main();




/*

// GAME

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

// UI

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'ROCK':
      playerSign.textContent = '✊'
      break
    case 'PAPER':
      playerSign.textContent = '✋'
      break
    case 'SCISSORS':
      playerSign.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'ROCK':
      computerSign.textContent = '✊'
      break
    case 'PAPER':
      computerSign.textContent = '✋'
      break
    case 'SCISSORS':
      computerSign.textContent = '✌'
      break
  }
}

function updateScore() {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie!"
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!'
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = 'Choose your weapon'
  scoreMessage.textContent = 'First to score 5 points wins the game'
  playerScorePara.textContent = 'Player: 0'
  computerScorePara.textContent = 'Computer: 0'
  playerSign.textContent = '❔'
  computerSign.textContent = '❔'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}



let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div= document.querySelector("marcador");
const result_div= document.querySelector(".result p");
const piedra_div= document.getElementById("r");
const papel_div= document.getElementById("p");
const tijera_div= document.getElementById("t");

/*

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOSE = 2;



const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});
paperBtn.addEventListener("click", ()=>{
    play(PAPER);
});
scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS);
});



function play(userOption){
    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Choosing...";

    setTimeout(function() {

    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

  

    
    machineImg.src = "img/" + machineOption+ ".png";


    switch(result){
        case TIE:
            resultText.innerHTML = "It's a TIE!";
            break;
        case WIN:
            resultText.innerHTML = "You WIN!";
            break;
        case LOSE:
            resultText.innerHTML = "You LOSE!";
            break;
    }
}, 2000);

}

/*

function ganar(userOption, machineOption){
    if (result = WIN){
        userScore++; 
    } 
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;

    }else if(userOption === ROCK){

        if(machineOption === PAPER) return LOSE;
        if(machineOption === SCISSORS) return WIN;

    }else if(userOption === PAPER){

        if(machineOption === SCISSORS) return LOSE;
        if(machineOption === ROCK) return WIN;

    }else if(userOption === SCISSORS){

        if(machineOption === ROCK) return LOSE;
        if(machineOption === PAPER) return WIN;
    }
}





let choices = ["rock", "paper", "scissors"];
let rock = 0;
let paper = 1;
let scissors = 2;

// esta funcion genera un numero aleatorio
function computerPlay(minimo, maximo) {
    let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}


let computerSelection = computerPlay(0,2);
let playerSelection;

playerSelection = prompt("What do you choose?\nRock: 0\nPaper: 1\nScissors: 2", 0);

alert("You chose " + choices[playerSelection]);
alert("Computer chose " + choices[computerSelection]);





function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        roundWinner = 'tie';
    }
        if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
        ) {
            playerScore++
            roundWinner = 'player'
        }
        if (
            (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK')
        ) {
            computerScore++
            roundWinner = 'computer'
        }
        updateScoreMessage(roundWinner, playerSelection, computerSelection)
    }

    function getRandomChoice() {
        let randomNumber = Math.floor(Math.random()*3)
        switch (randomNumber){
            case 0:
                return 'ROCK'
            case 1:
                return 'PAPER'
            case 2:
                return 'SCISSORS'
        }
    }

    function isGameOver(){
        return playerScore === 5 || computerScore === 5
    }

    const scoreMessage = document.getElementById('scoreMessage');
    const playerScorePara = document.getElementById('playerScore');
    const computerScorePara = document.getElementById('computerScore');
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');
    const endgameModal = document.getElementById('endgameModal');
    const endgameMsg = document.getElementById('endgameMsg');
    const overlay = document.getElementById('overlay');
    const restartBtn = document.getElementById('restartBtn');

    rockBtn.addEventListener('click', () => handleClick('ROCK'));
    paperBtn.addEventListener('click', () => handleClick('PAPER'));
    scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));
    restartBtn.addEventListener('click', restartGame);
    overlay.addEventListener('click', closeEndgameModal);

    function handleClick(playerSelection) {
        if (isGameOver()) {
            openEndgameModal()
            return
        }

        const computerSelection = getRandomChoice()
        playRound(playerSelection, computerSelection)
        updateChoices(playerSelection, computerSelection)
        updateScore()

        if (isGameOver()) {
            opendEndgameModal()
            setFinalMessage()
        }
    }
/*

            alert("It's a tie!");
        } else if(computerSelection == paper) {
            alert("You Lose! paper beats rock");
        } else if(computerSelection == tijera) {
            alert("You win! rock beats scissors");
        }
        
    } else if(playerSelection == paper) {
        if(computerSelection == rock) {
            alert("You win! paper beats rock");
        } else if(computerSelection == paper) {
            alert("It's a tie!");
        } else if(computerSelection == tijera){
            alert("You Lose! scissors beats paper");
        }
    } else if(playerSelection == scissors) {
        if(computerSelection == rock) {
            alert("You Lose! rock beats scissors");
        } else if(computerSelection == paper) {
            alert("You win! scissors beats paper");
        } else if(computerSelection == scissors) {
            alert("It's a tie!");
        }
    }
}

playRound(playerSelection, computerSelection); // sin esto no funciona en pantalla el resultado

function game(playRound) {
    let puntosPlayer = 0;
    let puntosComputer = 0;
    for (let i = 0; i< playRound; i++) {
        
        let resultado = playRound(0,2) 
        switch (resultado) {
            case 1:
                alert("Ganaste!")
                puntosPlayer++
                break
            case 2:
                alert("Perdiste!")
                puntosComputer++
                break
            case 0:
                alert("Empate!")
                break
        }
    }
    if(puntosPlayer > puntosComputer) {
        return `Juego terminado: ganaste a la computadora (${puntosPlayer}:${puntosComputer})`
    } else if(puntosPlayer < puntosComputer) {
        return `Juego terminado: has perdido (${puntosPlayer}:${puntosComputer})`
    } else {
        return `Juego terminado: empate (${puntosPlayer}:${puntosComputer})`
    }
}

(game(playRound));

//for (let i = 0; i<5; i++) {
    // Your code here
//}

*/


