
function flipCount() {

    let result = '';
    let flipArrayHeads = []; // holds all x > 0.5
    let flipArrayTails = []; // holds all x < 0.5
    let arrayHeadsTails = []; // holds a pair of x's
    let arrayHeadsTailsAll = []; // holds a pair of x's
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

    }

    arrayHeadsTails.push(countHeads,countTails);
    arrayHeadsTailsAll.push(arrayHeadsTails);

    var sum = arrayHeadsTails.reduce(function(sum, value){
      return sum + value;
    }, 0);

    var avg = sum / arrayHeadsTails.length;

    var squareDiffs = arrayHeadsTails.map(function(value){
      var diff = value - avg;
      var sqr = diff * diff;
      return sqr;

    });

      var sum = data.reduce(function(sum, value){
        return sum + value;
      }, 0);

      var avg = sum / data.length;
      return avg;

      var avgSquareDiff = average(sqr);
      var oneStdDev = 1* Math.sqrt(avgSquareDiff);
      var twoStdDev = 2* Math.sqrt(avgSquareDiff);
      var threeStdDev = 3* Math.sqrt(avgSquareDiff);
      var fourStdDev = 4* Math.sqrt(avgSquareDiff);

      console.log(avgSquareDiff);

}

flipCount();
