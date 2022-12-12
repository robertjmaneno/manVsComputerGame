
let computerChoice = ['paper', 'rock', 'scissors'];

//a function that plays a computer
function getComputerChoice(){

  return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}



function getPlayerChoice(playerSelection, computerSelection){

  if(playerSelection===computerSelection){

    playerScore++;
    computerScore++;
    return "It's a tie nobody has won";
    
  }

  else if(playerSelection === 'paper' && computerSelection === 'rock'){

    playerScore++;
    return "Congratulations you have won paper beats rock";
  }

  else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    
    computerScore++;
    return 'Sorry you have lost scissors beats paper';
  }

  else if(playerSelection === 'rock' && computerSelection === 'scissors'){

    playerScore++;
    return 'Congratulations you have won rock beats scissors';
  }

  else if(playerSelection === 'rock' && computerSelection === 'paper'){

    computerScore++;
    return ' sorry you have lost paper beats rock';
  }

  else if (playerSelection === 'scissors' && computerSelection === 'paper'){

    playerScore++;
    return 'Congratulations you have won scissors beats paper';
  }

  else if (playerSelection === 'scissors' && computerSelection === 'rock'){

    computerScore++;
    return 'sorry you have lost rock beats scissors';
  }

}


let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {

let playerSelection = prompt('What is your choice');
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();


alert(getPlayerChoice(playerSelection, computerSelection))
}




if(playerScore>computerScore){
  alert("CONGRANTS, YOU HAVE WON THE GAME");
}
else if(playerScore === computerScore){
  alert("IT'S A TIE, YOU HAVE ALL OBTAINED SAME POINTS")
}
else{
  alert('SORRY, THE COMPUTER HAS WON');
}
