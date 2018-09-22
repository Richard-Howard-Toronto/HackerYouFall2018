
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
      passengers: {
        British: 813,
        Swedish: 223,
        Icelandic: 123,
      },
      from: 'AUS',
      to: 'YYZ'
    },
    AC9222: {
      passengers: {
        British: 223,
        Swedish: 123,
        Icelandic: 1,
        Bosnian: 2,
        Italian:5
      },
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

    for (let airline in flights) {

        if (typeof flights[airline]==='object') {

          for (let nestedAttr in flights[airline])

           {

            if (typeof flights[airline][nestedAttr]==='object') {
              for (let thirdNested in flights[airline][nestedAttr]) {
                console.log(`there are ....`)
                console.log(Object(flights[airline][nestedAttr]));


              } // end of inner inner for loop

            } // end of this inner if

             else {
               //do nothing
             } // end of else
          } // end of inner for loop
        } // end of outer if check
      } //end of for loop
}
    howmanyACFlights();
