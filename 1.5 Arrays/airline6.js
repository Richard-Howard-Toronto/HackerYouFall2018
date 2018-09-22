
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




  function howmanyACFlights() {

      let flightCount = 0;
      let passengerCount = 0;

      for (var airline in flights) {

        let str=airline;

        if (str.substring(0, 2)==='AC') {

            flightCount+=1;

            passengerCount += passengers;

            console.log(`There are a total of ${passengerCount} passengers leaving from YYZ on AC`);

            } // end of inner function

        }

      }




    howmanyACFlights();



  // Challenge #6 — How many passengers are flying Air Canada and taking off from Toronto?
