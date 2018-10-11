
const values = [1,5,3,5,6,5,6];

var sum = values.reduce(function(sum, value){
  return sum + value;
}, 0);

var avg = sum / values.length;

console.log(`average is ${avg}`);


var diffs = values.map(function(value){
  var diff = value - avg;
  var sqr = diff * diff;
  console.log(`diff is ${diff}`);
  console.log(`sqr is ${sqr}`);
  return diff;

});

function average(values){
  var sum = values.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / values.length;
  return avg;
}

average(1,2,3,4);

//
//
// var avgSquareDiff = average(sqr);
