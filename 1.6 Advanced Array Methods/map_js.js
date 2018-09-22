
const numbersArray = [Math.round(Math.random()*10,5),Math.round(Math.random()*100,0),Math.round(Math.random()*1000,2)];

const halfNumbers = numbersArray.map((value) => {

  console.log(value);
  return value / 2;

});

  console.log(halfNumbers);
