const computerScore = ['rock', 'scissors', 'paper'];

function computerPlay(){

    return computerScore[Math.floor(Math.random()* computerScore.length)]
}



let playerScore = prompt("Enter your choice");
playerScore = playerScore.toLowerCase();


let computerResult = computerPlay();

function GamePlay(playerScore, computerResult) {
    // If player chooses rock
    if (playerScore === "rock") {
      if (computerResult === "rock") {
        return alert("It's a tie nobody has won!");

      } else if (computerResult === "paper") {
        return alert("sorry a computer has won");

      } else if (computerResult === "scissors") {
        return alert("Congratulations you have won");
      }
    }
  
    // If player chooses paper
    if (playerScore === "paper") {
      if (computerResult=== "rock") {
        return alert("Congratulations you have won");

      } else if (computerResult === "paper") {
        return alert("It's a tie! nobody has won");

      } else if (computerResult=== "scissors") {
        return alert("Sorry a computer has won");
      }
    }
  
    // If player chooses scissors
    if (playerScore === "scissors") {
      if (computerResult === "rock") {
        return alert("sorry a computer has won!");

      } else if (computerResult=== "paper") {
        return alert("Congratulations you have won!");

      } else if (computerResult === "scissors") {
        return alert("It's a tie! nobody has won");
      }
    }
  }
  
 
  GamePlay(playerScore, computerResult);