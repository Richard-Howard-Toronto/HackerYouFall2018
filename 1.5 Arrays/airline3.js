
  var flights = {
    AC123: {
      passengers: 43,
      from: 'YYZ',
      to: 'BOS'
    },
    WJ342: {
      passengers: 60,
      from: 'YHM',
      to: 'YQR'
    },
    AC543: {
      passengers: 34,
      from: 'YYZ',
      to: 'SFO'
    },
    UN523: {
      passengers: 34,
      from: 'YYZ',
      to: 'AUS'
    },
    WJ234: {
      passengers: 123,
      from: 'AUS',
      to: 'YYZ'
    },
    AC9222: {
      passengers: 63,
      from: 'BOS',
      to: 'YHM'
    },
    UN634: {
      passengers: 234,
      from: 'YYZ',
      to: 'BOS'
    },
    AC253: {
      passengers: 235,
      from: 'YHM',
      to: 'BOS'
    }
  }

//
// console.log(flights)
// console.log(flights.AC123)
// console.log(flights.AC123.passengers)

  function passengersLandingOutsideCanada() {

    let count = 0;

      for (var airline in flights) {

          let innerObject = flights[airline];

              if (innerObject.to === 'BOS' || innerObject.to === 'AUS') {
              count = count + 1;
              }
      }
          console.log(`There are ${count} international flights`);
  }

    passengersLandingOutsideCanada();


  // Challenge #3 — how many flights land outside Canada? (BOS, and AUS)
  // Challenge #4 — how many air planes will go through Toronto? (YYZ)
  // Challenge #5 — How many Air Canada flights are there? (HINT: Looks up the substring method)
  // Challenge #6 — How many passengers are flying Air Canada and taking off from Toronto?
  // Challenge #7 — How many passengers go through the Hamilton airport? (YHM)
  // Challenge #8 — What is the average number of people who take a flight on each of the airlines?

  // Good luck!
