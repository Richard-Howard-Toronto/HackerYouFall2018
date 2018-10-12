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


function tryitout() {


  let values = [];

  for (var i = 0; i < 1000; i++) {
    var x = Math.random();
    values.push(x);
  }

  console.log(`count is ${i} flips`)

  function average(values){
    var sum = values.reduce(function(sum, value){
      return sum + value;
    }, 0);

    var avg = sum / values.length;
    return avg;
  }

  average(values);

  function standardDeviation(values){
    var avg = average(values);

  // calculate the difference between each of the values in the array, and the average value. To do that, I’m going to use the Array.map function.The map function allows me to iterate over the items in an array, and return a new array of values that are calculated from the original array of values. The resulting array will be the same length as the original array, but it will contain the values that were calculated and returned from the callback of the .map call, instead of the original values. In this case, I am calculating the difference between the original values and the average of those values

    var squareDiffs = values.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    }); // end of variable squareDiffs


  // With the squared differences in hand, I need to get the average of these values. Again, I need to sum and divide the array – the same way I did it before. Only this time, I am creating the average of the squared differences instead of the average of the original values. Rather than repeat the code from above, I’ll extract that in to an “average” function:

    var avgSquareDiff = average(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    console.log(`one std dev is ${stdDev}`)
    return stdDev;
  } // end of function


  // get the average of a given data set.The reduce method allows me to iterate over the items in an array and produce a single result. In this case, I am producing a sum of all the items in the array… that is, I am reducing the values of the array down in to the sum of the values.


  //
  // Lastly, calculate the square root of the average squared difference: the standard deviation for the data set in the average(squareDiffs) function.

  function calcCIs() {
    var stdDev_a = standardDeviation(values);
    var average_a = average(values);
    var lowerBound = average_a - stdDev_a;
    var upperBound = average_a + stdDev_a;
    console.log(`lowerbound is ${lowerBound}`)
    console.log(`upperbound is ${upperBound}`)

  }

  calcCIs();

      const dogs = (values);
      let sumdogs = 0;
      let avgdogs = 0;
      values.forEach((dog) => {
          sumdogs += dog;
          avgdogs = sumdogs/values.length;
      });

      console.log(`sum is ${sumdogs}, the sum of the flips`);
      console.log(`avg is ${avgdogs}, the 50/50 flip`);

  }
