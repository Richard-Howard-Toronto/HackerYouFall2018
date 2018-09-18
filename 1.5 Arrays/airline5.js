
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


let flightCount = 0;

  function howmanyACFlights() {

      for (var airline in flights) {

        let str=(airline)

        if (str.substring(0, 2)==='AC') {

            flightCount+=1;

        }

      }
      console.log(`There are ${flightCount} AC flights`);
  }

    howmanyACFlights();

  // Challenge #5 — How many Air Canada flights are there? (HINT: Looks up the substring method)
  
