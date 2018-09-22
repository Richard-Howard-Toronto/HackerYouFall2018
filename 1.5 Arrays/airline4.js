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



  function passengersGoingThroughToronto() {

      let passengerCount = 0;
      let planeCount = 0;

      console.log(flights);

      for (var airline in flights) {

          let innerObject = flights[airline];

              if (innerObject.from === 'YYZ' || innerObject.to === 'YYZ') {
              passengerCount += innerObject.passengers;
              planeCount += 1;

              }
      }
      console.log(`There are ${passengerCount} passengers on ${planeCount} planes going through Toronto.`);
  }

    passengersGoingThroughToronto();


  // Challenge #4 — how many air planes will go through Toronto? (YYZ)
