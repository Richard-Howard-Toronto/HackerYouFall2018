// A coin flip is a 50/50 chance that you will get heads or tails.
//
// If you flip a coin 100 times, how many of them will be heads and how many will be tails? Sometimes you get 55/45, maybe even 60/40. Let's call these 100 flips a "group".
//
// If you repeat the previous 100 flip group 100,000 times, each 100 flips recording any record highs and record lows for that group.
//
// So, to approach it from a programming perspective:
//
// Write a flip() function that flips a coin and returns heads or tails based on a random number.
// Write a function flipMany() that calls flip() 100 times. Recording the results of heads and tails.
// If there are record highs or record lows for each flip group. For example, 30 heads or 70 tails, record them as the the current highs/lows.
// Write a function flipManyGroups() that calls flipMany() 100,000. Each time the flipMany() is run, it might find a new high/low.
// This will effectively flip a coin 10 million times. If you computer can handle it, you can increase this number. I ran mine 10,000,000 times, flipping the coin 1 billion times getting these results:
//
// highest heads: 75 highest tails: 76 lowest heads: 24 lowest tails: 25


// generate a heads or a tails


let result = '';
let x = 0;
let flipArrayHeads = [];
let flipArrayTails = [];
let arrayHeadsTails = [];
let maxCount = 100;

let countHeads = 0;
let countTails = 0;

for (var counter = 0; counter < maxCount; counter++) {

  x = Math.random();

  if (x >= 0 && x <= 0.5) {
    flipArrayHeads.push(x);
    countHeads++;
  } else {
    flipArrayTails.push(x);
    countTails++;
  }
}

arrayHeadsTails.push(countHeads,countTails);
console.log(arrayHeadsTails);
