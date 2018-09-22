// all chipmunks are squirrels but not all squirrels are chipments.

// a method is a function that lives in an object

// console is object; log is method.

const saturnObject = {
  density: 'lowest',
  visitors: 4,
  tempCelcius: -178,

  visible: function(season) {
    if (season === 'summer') {
      return true;
    } else {
      return false;
    }
  },

  getTemperatureInF: function () {
    return (this.tempCelcius * 2) + 32;
  }

}

console.log(saturnObject.visible('summer'));

console.log(saturnObject.getTemperatureInF(0));
