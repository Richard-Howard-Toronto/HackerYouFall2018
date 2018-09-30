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

let globalcount = 0;
let arrayHeadsTailsAll = []; //

function flipCount() {

    let result = '';
    let flipArrayHeads = []; // holds all x > 0.5
    let flipArrayTails = []; // holds all x < 0.5
    let arrayHeadsTails = []; // holds a pair of x's
    let maxCount = 100; // the number of flips to get an array of 100 pairs
    let countHeads = 0;
    let countTails = 0;

    for (var counter = 0; counter < maxCount; counter++) {

      let x = Math.random();

        if (x >= 0 && x <= 0.5) {
          flipArrayHeads.push(x);
          countHeads++;
        } else {
          flipArrayTails.push(x);
          countTails++;
        }

    }

    arrayHeadsTails.push(countHeads,countTails);
    arrayHeadsTailsAll.push(arrayHeadsTails);


}


let storeElementArrayHeads = [];
let storeElementArrayTails = [];

function functionName() {

    arrayHeadsTailsAll.forEach(function(element) {
    storeElementArrayHeads.push(element[0]);
    storeElementArrayTails.push(element[1]);

    // console.log(`100 flips: ${element[0]},${element[1]} generates heads and tails respectively`);
    });

    console.log(`max heads is ${Math.max(...storeElementArrayHeads)}`);
    console.log(`min heads is ${Math.min(...storeElementArrayHeads)}`);
    console.log(`max tails is ${Math.max(...storeElementArrayTails)}`);
    console.log(`min tails is ${Math.min(...storeElementArrayTails)}`);


}

function flipManyGroups(num) {

  for (var i = 0;
    i < num; i++) {
    flipCount(num);
  }
}

flipManyGroups(100000)

functionName();
