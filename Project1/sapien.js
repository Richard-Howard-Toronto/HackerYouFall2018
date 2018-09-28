let sapiencount = 0;
let computercount = 0;
let sapienAnswer = '';
let computerAnswer = '';

let gamecount = 0;

let sapienwins = 0;
let computerwins = 0;

while (gamecount <= 10) {

  gamecount++;

  console.log(`game: ${gamecount}`);

  let sapienChoice = Math.random()*10;
  let computerChoice = Math.random()*10;

      if (sapienChoice >= 0 && sapienChoice <=3.333) {
        sapienAnswer = "ROCK";
      } else if (sapienChoice > 3.333 && sapienChoice <=6.666) {
        sapienAnswer = "PAPER";
      } else {
        sapienAnswer = "SCISSORS";
      }


      if (computerChoice >= 0 && computerChoice <=3.333) {
        computerAnswer = "ROCK";
      } else if (computerChoice > 3.333 && computerChoice <=6.666) {
        computerAnswer = "PAPER";
      } else {
        computerAnswer = "SCISSORS";
      }

      console.log(`the computer draws ${computerAnswer} and Sapien: ${sapienAnswer}`);


      if (sapienAnswer == computerAnswer) {
        console.log(`it is a draw as sapien answer: ${sapienAnswer} is computer answer ${computerAnswer}`);

      } else if (sapienAnswer == "ROCK" && computerAnswer == "SCISSORS" || sapienAnswer == "SCISSORS" && computerAnswer == "PAPER" || sapienAnswer == "ROCK" && computerAnswer == "PAPER" ) {
        sapienwins++;
        console.log(`SAPIEN WINS: games won so far are ${sapienwins} for sapien`);



      } else if  (sapienAnswer == "PAPER" && computerAnswer == "SCISSORS" || computerAnswer == "ROCK" && sapienAnswer == "PAPER" ) {
        computerwins++;
        console.log(`COMPUTER WINS: games won so far are ${computerwins} for computer`);

      }


}

if (sapienwins > computerwins) {
  console.log(`sapine wins match with ${sapienwins} wins - versus ${computerwins}`);
} else if (sapienwins < computerwins) {
  console.log(`computer wins match: ${computerwins} vs ${sapienwins}`);
} else {
  console.log(`DRAW: computer wins ${computerwins} versus ${sapienwins} for sapien`)
}
