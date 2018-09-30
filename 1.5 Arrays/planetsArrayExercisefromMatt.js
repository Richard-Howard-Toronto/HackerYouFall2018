const planets = [
  {
    name: 'mercury',
    yearLength: 0.24,
    gravity: 0.38,
    moons: 0,
    size: 2440,
  },
  {
    name: 'venus',
    yearLength: 0.62,
    gravity: 0.91,
    moons: 0,
    size: 6052,
  },
  {
    name: 'earth',
    yearLength: 1,
    gravity: 1,
    moons: 1,
    size: 6371,
  },
  {
    name: 'mars',
    yearLength: 1.88,
    gravity: 0.38,
    moons: 2,
    size: 3390,
  },
  {
    name: 'jupiter',
    yearLength: 11.86,
    gravity: 2.4,
    moons: 79,
    size: 69911,
  },
  {
    name: 'saturn',
    yearLength: 29.46,
    gravity: 1.07,
    moons: 62,
    size: 58232,
  },
  {
    name: 'uranus',
    yearLength: 84.02,
    gravity: 0.89,
    moons: 27,
    size: 25362,
  },
  {
    name: 'neptune',
    yearLength: 164.8,
    gravity: 1.14,
    moons: 14,
    size: 24642,
  },
  {
    name: 'pluto',
    yearLength: 248,
    gravity: 0.06,
    moons: 5,
    size: 1188,
  }
];

console.log('-------next question');

  function sendProbe() {
    console.log(`hi ${planets}`) // 8 times, returns object
  }

  planets.forEach(function(planet) {
    if (planet.name !== 'earth')
    sendProbe();
  });

  console.log('-------next question');

  const bigPlanets = planets.filter((myplanet) => {
    if (myplanet.size >= 50000) {
      console.log(`A big planet is ${myplanet.name} with a size of ${myplanet.size} solar masses`)
    } else {
      return false; //or do nothing
    }
  })

  console.log('-------next question');

const planetAge = planets.map(planet => {

  let myAge = 54;

  const ageOnPlanet = myAge / planet.yearLength;

  console.log (`on planet ${planet.name} I am ${Math.round(ageOnPlanet)} yrs old as planet's year is ${planet.yearLength} that of Earth`)

})

console.log('-------next question');

const numberOfMoons = planets.reduce((count, planet) => {
  console.log(`the planet ${planet.name} has ${planet.moons} moons`);
  console.log(planet.name, count);
  return count + planet.moons;
}, 0);
console.log(`don't forget, pluto 185 is the sum of all moons`)
 // this zero is the count, the start of the argument [yikes!]

  console.log('-------next question');

 let moonCount = 0;
 planets.forEach(planet => {
   moonCount += planet.moons;
 });
console.log(moonCount);

console.log('-------next question');

  let maxGravity = 0;
  let maxGravityArray = [];
  planets.forEach(planet => {
    maxGravityArray.push(planet.gravity);
  });
  console.log(`max gravity is ${Math.max(...maxGravityArray)}`);
