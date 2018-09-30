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


var countries = {
    China: 1371980000,
    India: 1276860000,
    'United States': 321786000,
    Indonesia: 255461700,
    Brazil: 204873000,
    Pakistan: 190860000,
    Nigeria: 182202000,
    Bangladesh: 158993000,
    Russia: 146578380,
    Japan: 121740000,
    Philippines: 102023900,
    Vietnam: 91812000
};



// Some
function isRealyBig(element) {
  return countries[element] > 1000000000;
}
if (Object.keys(countries).some(isRealyBig)) {
  // console.log('Some: Object contains a country with population over a billion');
} else {
  // console.log('Some: Nope');
}


// Every
function isBigEnough(element) {
  return countries[element] > 1000000000;
}
if (Object.keys(countries).every(isBigEnough)) {
  console.log('Every: yup, all are over billion');
} else {
  console.log('Every: under a billion');
}

// Filter
var countriesFiltered = Object.keys(countries).filter(function(key) {
  return countries[key] <= 1000000000;
});
console.log('Filter: ' + countriesFiltered);

// Filter airline values


// Filter Airline Keys
var flightsFiltered = Object.keys(flights).filter(function(key) {
  return flights[key];
});
console.log('The Filtered Flights [keys] are: ' + flightsFiltered);






// Filter / map
var countriesMapped = Object.keys(countries).filter(function(key) {
  return countries[key] <= 1000000000;
}).map(function(key) {
  return countries[key];
});
console.log('Map: ' + countriesMapped);
