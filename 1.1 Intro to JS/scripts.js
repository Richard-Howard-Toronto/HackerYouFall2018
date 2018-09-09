const yourName = prompt("What is your name?");
const yourAge = prompt("What is your age?");

const output = `You, ${yourName}, are ${yourAge} years old or in seconds you are ${yourAge * 365 * 24 * 3600} old!`;

console.log(output);

//   console.log(ageInSeconds_C);







//
var now = new Date();
var birthday = new Date(1964, 9, 24, 10, 33, 30, 0);


var time_in_seconds = now - birthday;
console.log(time_in_seconds);

//old school concatenation

const ageInSeconds = "I am "+ time_in_seconds+ " seconds old";
console.log(ageInSeconds);

ok_ = prompt("Show your age in seconds?");

if (ok_ == true) {
  //new school ES6 concatenation

  const name = `Richard`;
  const job = `Instructor`;

  const ageInSeconds_C = `I, ${name}, am ${time_in_seconds/1000000} million seconds`;
  console.log(ageInSeconds_C);
}

//Get name and store in variable
const outputName = prompt("what is your name?");
console.log(outputName);
