

let globalcount = 0;
let arrayHeadsTailsAll = []; //

function flipCount() {

    let result = '';
    let flipArrayHeads = []; // holds all x > 0.5
    let flipArrayTails = []; // holds all x < 0.5
    let arrayHeadsTails = []; // holds a pair of x's
    let maxCount = 10; // the number of flips to get an array of 100 pairs
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

        console.log(flipArrayHeads);

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

    });
}
    console.log(`max heads is ${Math.max(...storeElementArrayHeads)}`);
    console.log(`min heads is ${Math.min(...storeElementArrayHeads)}`);
    console.log(`max tails is ${Math.max(...storeElementArrayTails)}`);
    console.log(`min tails is ${Math.min(...storeElementArrayTails)}`);


function flipManyGroups(num) {

  for (var i = 0;
    i < num; i++) {
    flipCount(num);
    console.log(num);
  }
}

flipManyGroups(1);

functionName();
