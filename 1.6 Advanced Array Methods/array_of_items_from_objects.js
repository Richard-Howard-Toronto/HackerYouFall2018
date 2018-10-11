const persons = [
  {first: 'Richard' , last: 'Howard' },
  {first: 'Richie' , last: 'How' },
  {first: 'Rich' , last: 'Ard' }
]


const combinedNames = persons.map((person)  => {
  // to create a brand new array
  if (person.first === "Richard") {
    return `${person.first}  ${person.last}`;
  } else {
    return `${person.last}`;
  }

});

console.log(combinedNames);

const trucks = [
  {brand: 'volvo', weight: 200, age: 10},
  {brand: 'pbilt', weight: 440, age: 3},
  {brand: 'freightliner', weight: 240, age: 4}
]

const mapTrucks = trucks.map((mytrucks) => {
  // look for pattern in the string brand

  var str = mytrucks.brand;
  var res = str.match(/volvo/g);

  if (res == 'volvo') {
    console.log('yes we have it in stock');
  } else {
    console.log('not in stock');
  }

});

const filterTrucks = trucks.filter((mytruck) => {


});


var numbersArray = Array.from(Array(22).keys()).map(i => i );

const primeNumbers = numbersArray.map((value) => {
    if (value % 7 == 0 && value % 3 == 0) {
      return (`${value} is divisible by 7 and 3`);
    } else {
      false
    }

});


console.log(primeNumbers);



const ages = Array.from(Array(20).keys()).map(i => i * i );

const totalAges = ages.reduce((total, currentValue) => {
    console.log(currentValue);
    return total + currentValue;
});

console.log(totalAges);
