const nameOfFunction = (param1, param2) => {

}




const hello = (param_myName, param_location, param_mood, param_age = 49) => {
  return `Hello my name is ${param_myName} and my location is ${param_location} and my mood is ${param_mood} and my age is ${param_age}`;
}

console.log(hello('richard','To.','deliriously happy'));

const logPet = (petname, pettype) => {
  return `${petname} is a nice ${pettype}`;
}

console.log(logPet('katie','cat'))





const multiply = (param1, param2, param3) => {

  for (var i = 0; i < param2; i++) {
          if (param1===2) {
            return `the output of param1: ${param1}`;
          }
  }
  return `the output of three param products is: ${param1*param2*param3}`;
}

console.log(multiply(2,4,8));
