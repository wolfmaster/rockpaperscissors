
// esta funcion genera un numero aleatorio
function computerPlay(minimo, maximo) {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]

}


let computerSelection = computerPlay();
let playerSelection;

playerSelection = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[playerSelection]);
alert("La computadora eligió " + opciones[computerSelection]);




console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if(playerSelection == piedra) {
        if(computerSelection == piedra){
            alert("Empate!");
        } else if(computerSelection == papel) {
            alert("Perdiste!");
        } else if(computerSelection == tijera) {
            alert("Ganaste!");
        }
        
    } else if(playerSelection == papel) {
        if(computerSelection == piedra) {
            alert("Ganaste!");
        } else if(computerSelection == papel) {
            alert("Empate!");
        } else if(computerSelection == tijera){
            alert("Perdiste!");
        }
    } else if(playerSelection == tijera) {
        if(computerSelection == piedra) {
            alert("Perdiste!");
        } else if(computerSelection == papel) {
            alert("Ganaste!");
        } else if(computerSelection == tijera) {
            alert("Empate!");
        }
    }
}

function game(playRound) {
    for (let i = 0; i<5; i++) {
        
    }
}

//for (let i = 0; i<5; i++) {
    // Your code here
//}


