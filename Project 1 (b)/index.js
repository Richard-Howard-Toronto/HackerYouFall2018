var welcomeContent = "The rules are simple.  The rock represents evolution.  Evolution always wins, except for paper which represents the human (Anthropecene) impact on the planet and the scissors represent the ability of the planet to recover from human behavior because scissors cuts paper. Pick your choice.";

function displayRules() {
  var el = document.getElementById('displayRules');
  el.textContent = welcomeContent;
  var button = document.getElementById('button');
  button.style.visibility = 'hidden';
}



function button2() {
  var msg = 'button2';
  var button2 = document.getElementById('button button2');
  button2.textContent = msg;
}

function button3() {
  var msg = 'button3';
  var button3 = document.getElementById('button button3');
  button3.textContent = msg;
}

function button4() {
  var msg = 'button4';
  var button4 = document.getElementById('button button4');
  button4.textContent = msg;
}

function button5() {
  var msg = 'button5';
  var button5 = document.getElementById('button button5');
  button5.textContent = msg;
}


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
    var y = 'rock';
    if ((x == 'rock' && y == 'rock') || (x == 'paper' && y == 'paper') || (x == 'scissors' && y == 'scissors') ) {
      var msg = 'button1';
      var button1 = document.getElementById('button button1');
      button1.textContent = 'Draw';

    } else if ((x == 'rock' && y == 'scissors') || (x == 'paper' && y == 'rock') || (x == 'scissors' && y == 'paper')) {
      var msg = 'button1';
      var button1 = document.getElementById('button button1');
      button1.textContent = 'Computer Wins';

    } else if ((x == 'rock' && y == 'paper') || (x == 'paper' && y == 'scissors') || (x == 'scissors' && y == 'rock')) {
      var msg = 'button1';
      var button1 = document.getElementById('button button1');
      button1.textContent = 'Human Wins';

    } else {
      var msg = 'something went wrong';
      var button1 = document.getElementById('button button1');
      button1.textContent = msg;
    }
  }
  compare();
}


function runGamePaper() {

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
      var msg = 'button2';
      var button2 = document.getElementById('button button2');
      button2.textContent = 'Draw';

    } else if ((x == 'rock' && y == 'scissors') || (x == 'paper' && y == 'rock') || (x == 'scissors' && y == 'paper')) {
      var msg = 'button2';
      var button2 = document.getElementById('button button2');
      button2.textContent = 'Computer Wins';

    } else if ((x == 'rock' && y == 'paper') || (x == 'paper' && y == 'scissors') || (x == 'scissors' && y == 'rock')) {
      var msg = 'button2';
      var button2 = document.getElementById('button button2');
      button2.textContent = 'Human Wins';

    } else {
      var msg = 'something went wrong';
      var button2 = document.getElementById('button button2');
      button2.textContent = msg;
    }
  }
  compare();
}


function runGameScissors() {

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
    var y = 'scissors';
    if ((x == 'rock' && y == 'rock') || (x == 'paper' && y == 'paper') || (x == 'scissors' && y == 'scissors') ) {
      var msg = 'button3';
      var button3 = document.getElementById('button button3');
      button3.textContent = 'Draw';

    } else if ((x == 'rock' && y == 'scissors') || (x == 'paper' && y == 'rock') || (x == 'scissors' && y == 'paper')) {
      var msg = 'button3';
      var button3 = document.getElementById('button button3');
      button3.textContent = 'Computer Wins';

    } else if ((x == 'rock' && y == 'paper') || (x == 'paper' && y == 'scissors') || (x == 'scissors' && y == 'rock')) {
      var msg = 'button3';
      var button3 = document.getElementById('button button3');
      button3.textContent = 'Human Wins';

    } else {
      var msg = 'something went wrong';
      var button3 = document.getElementById('button button3');
      button3.textContent = msg;
    }
  }
  compare();
}


function reset() {
  document.location.reload(true);
}
