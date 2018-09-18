
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

  function avgNumberOfPassengers() {

    let passengerCount = 0;
    let planeCount = 0;

      for (var airline in flights) {

          let innerObject = flights[airline];

              passengerCount += innerObject.passengers;
              planeCount += 1;

      }

      let AvgPassengersPerPlane = passengerCount/planeCount;

    console.log(`There are ${passengerCount} people landing or leaving on ${planeCount} different flights and the average is ${AvgPassengersPerPlane}.`);
  }

    avgNumberOfPassengers();

  // Challenge #8 — What is the average number of people who take a flight on each of the airlines?
