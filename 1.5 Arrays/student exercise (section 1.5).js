
// Try creating a "student" object. The student should have the following properties:

const student = {

  equipment: ['books','pens','money'],
  energy: 100,
  grades: 0,

  updateEnergy: function() {
       student.energy = 200;
       console.log(student.energy);
   },

  updateEquipment: function(newequipment) {
        console.log(`adding....... ${newequipment}`);
        student.equipment.push(newequipment);
        console.log(`total equipment is ${student.equipment}`);
  },

  timeStudied: function(minutes) {

      if (minutes >= 1) {
        student.grades = student.grades + Math.round((minutes/60 * 5));
        if (student.energy === 0 ) {
            student.grades = 0;
        } else {
            student.energy = Math.round(student.energy - (minutes/60 * 2));
        } // end of else
          console.log(`your grade is ${student.grades} and your energy is ${student.energy}`);
      } // end of if
      else {
        console.log(`you must study at least one minute to see any result`);
      }
  } // end of method
}

const uniform = {
  tie: 'blue',
  shoes: 2,
  cloth: 'cotton',

  changeUniform: function(tietype,number,clothtype) {
    uniform.tie = tietype;
    uniform.shoes = number;
    uniform.cloth = clothtype;

    console.log(uniform);
  },

}

student.updateEnergy();
student.updateEquipment('fishing rod');
uniform.changeUniform('green',4,'suede');
student.timeStudied(100);

// equipment (array).
// energy (number).
// grades (number).
// uniform (object with top, bottoms, shoes properties).
// create a method that takes in food (number of calories) and then updates energy.
// create a method that takes in new equipment that will update our equipment array.
// create a method that will change the uniform (since everyday you wear something different).
// create a method study time that takes time studied (minutes) that will update our grades and deplete our energy.
// for every hour that you study, your grades go up by 5% (example: if your grade is 60, and you study an hour, your grade will be 65) .
// for every hour you study, your energy goes down by 2. (Bonus: if your energy goes below 0, your grades go down 10%)
// what happens if you use the update uniform method to change something that doesn't exist in the uniform object?

const myBasket = {
    apples: 1,
    increment: function() {
        this.apples += 1
    }
}
myBasket.apples;
myBasket.increment();
myBasket.apples;

console.log(myBasket.apples);
