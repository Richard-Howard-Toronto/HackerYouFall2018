//NOT COMPLETE
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

  function passengersLandingInBoston() {

      for (var airline in flights) {

          let innerObject = flights[airline];
          console.log(innerObject);

          let passengerCount = 0;
              if (innerObject.to === 'BOS') {
              passengerCount += innerObject.passengers;
              console.log(passengerCount);
              }
      }
  }

    passengersLandingInBoston();


  // Challenge #4 — how many air planes will go through Toronto? (YYZ)
