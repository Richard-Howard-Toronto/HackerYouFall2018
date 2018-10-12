// Play rock, paper scissors against the computer that keeps going until someone wins 5 games.
//
// It should take a user input of ‘rock’, ‘paper’, or ‘scissors’ as a parameter
// The Computer should randomly draw rock, paper or scissors
// You need to keep count of wins, losses and ties until someone wins.
// You need to validate the input from the user to make sure they don't type in "BOMB" or "123", also be aware of capitalization of "Scissors" etc...
// Bonus if you can look ahead to create a simple scoreboard with jQuery

// scissors beats paper
// paper beats rock
// rock beats scissors beats paper beats rock

function compChoice() {
  let randomNumber = Math.random()*10;
  let tool = ('');
  if (randomNumber >= 0 && randomNumber <= 3) {
    tool = 'rock'
  } else if (randomNumber >= 3.0000000001 && randomNumber <= 7) {
    tool = 'paper'
  } else if (randomNumber >= 7.0000000001 && randomNumber <= 10){
    tool = 'scissors'
  } else {
    //nothing
  }
  return tool;
}


let computerWins = 0;
let sapienWins = 0;

function game(spr) {

    var tool = compChoice(); // the computer's choice
    var tool = tool.toUpperCase();
    let str = spr; // the sapien's input
    let strU = str.toUpperCase();

if (sapienWins < 5 && computerWins < 5 ) {

if (strU == 'ROCK' || strU == 'PAPER' || strU == 'SCISSORS') {

    if (tool === 'ROCK' && strU === 'SCISSORS') {
      computerWins++;
      console.log(`computer wins with ${tool}`);
    }
      else if (tool === 'ROCK' && strU === 'PAPER') {
      sapienWins++;
      console.log(`sapien wins with ${strU}`);

    } else if (tool === 'SCISSORS' && strU === 'ROCK') {
      sapienWins++;
      console.log(`sapien wins with ${strU}`);
    }
      else if (tool === 'SCISSORS' && strU === 'PAPER') {
      computerWins++;
      console.log(`computer wins with ${tool}`);

    } else if (tool === 'PAPER' && strU === 'ROCK') {
      computerWins++;
      console.log(`computer wins with ${tool}`);
    }
      else if (tool === 'PAPER' && strU === 'SCISSORS') {
      sapienWins++;
      console.log(`sapien wins with ${strU}`);
    }
      else {
      console.log(`computer: ${tool}  sapien:  ${strU} --  a draw`)
    }

    console.log(`Sapien: ${sapienWins}, Computer: ${computerWins},`);

  } else {
    console.log("you must enter paper, scissors or rock; capitalized or not, it does not matter");
  }

}

}


console.log('start of game --------------- ')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
game('paper')
