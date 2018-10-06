// test.js to build random number functions
// to generate what the computer returns

function runGameRock() {

  var x = Math.random();

  if (x > 0 && x < 1/3) {
    x = 'rock';
    console.log(`computer draws rock`)
  } else if (x >= 1/3 && x < 2/3) {
    x = 'paper';
    console.log(`computer draws paper`)
  } else if (x >= 2/3 && x < 3){
    x = 'scissors';
    console.log(`computer draws scissors`)
  } else {
    return
  }

  function compare() {
    var y = 'paper';
    if ((x == 'rock' && y == 'rock') || (x == 'paper' && y == 'paper') || (x == 'scissors' && y == 'scissors') ) {
      console.log('draw');
    } else if ((x == 'rock' && y == 'scissors') || (x == 'paper' && y == 'rock') || (x == 'scissors' && y == 'paper')) {
      console.log('x, the computer, wins');
    } else if ((x == 'rock' && y == 'paper') || (x == 'paper' && y == 'scissors') || (x == 'scissors' && y == 'rock')) {
      console.log('y, the human, wins');
    } else {
      console.log('something is wrong');
    }
  }
  compare();
}
