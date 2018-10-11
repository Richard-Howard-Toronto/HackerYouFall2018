
const values = [1,2,3,4];

function standardDeviation(values){
  var avg = average(values);

// calculate the difference between each of the values in the array, and the average value. To do that, I’m going to use the Array.map function.The map function allows me to iterate over the items in an array, and return a new array of values that are calculated from the original array of values. The resulting array will be the same length as the original array, but it will contain the values that were calculated and returned from the callback of the .map call, instead of the original values. In this case, I am calculating the difference between the original values and the average of those values

  var squareDiffs = values.map(function(value){
    console.log(`value is ${value}`)
    var diff = value - avg;
    console.log(`diff is ${diff}`)
    var sqrDiff = diff * diff;
    console.log(`sqrDiff is ${sqrDiff}`)
    return sqrDiff;
  }); // end of variable squareDiffs


// With the squared differences in hand, I need to get the average of these values. Again, I need to sum and divide the array – the same way I did it before. Only this time, I am creating the average of the squared differences instead of the average of the original values. Rather than repeat the code from above, I’ll extract that in to an “average” function:

  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  console.log(`the std deviation is ${stdDev}`)
  return stdDev;
} // end of function


// get the average of a given data set.The reduce method allows me to iterate over the items in an array and produce a single result. In this case, I am producing a sum of all the items in the array… that is, I am reducing the values of the array down in to the sum of the values.

function average(values){
  var sum = values.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / values.length;
  return avg;
}

average(values);
//
// Lastly, calculate the square root of the average squared difference: the standard deviation for the data set in the average(squareDiffs) function.

function calcCIs() {
  var stdDev_a = standardDeviation(values);
  var average_a = average(values);
  var lowerBound = average_a - stdDev_a;
  var upperBound = average_a + stdDev_a;
  console.log(lowerBound,upperBound)
}

calcCIs();
