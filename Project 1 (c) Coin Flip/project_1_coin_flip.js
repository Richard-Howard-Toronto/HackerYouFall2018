// $(document).ready(function(){
//     // your code here
// });
function reFresh() {
   location.reload();
}


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

    $('span#output1').text(`: ${Math.max(...storeElementArrayHeads)}`);
    $('span#output2').text(`: ${Math.min(...storeElementArrayHeads)}`);
    $('span#output3').text(`: ${Math.max(...storeElementArrayTails)}`);
    $('span#output4').text(`: ${Math.min(...storeElementArrayTails)}`);
}

function flipManyGroups(num) {

  for (var i = 0;
    i < num; i++) {
    flipCount(num);
  }
}

flipManyGroups(100000)

functionName();

// the output
