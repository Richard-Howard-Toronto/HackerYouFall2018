
// Try creating a "student" object. The student should have the following properties:

const student = {



  equipment: ['books','pens','money'],
  energy: 100,
  grades: 0,
  cost_of_energy: 10,

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
        student.energy = Math.round(student.energy - (minutes/60 * 2));



        if (student.energy <= 0 ) {
          return console.log('you are out of energy');
        } else {
            student.grades = Math.round(student.grades * 0.9);

            console.log(`your grade is ${student.grades} and your energy is ${student.energy}`);
        } // end of else
      } // end of if
      else {
        console.log(`you must study at least one minute to see any result`);

      }
        console.log(`you can only study for ${Math.round(student.energy / (minutes / 60 *  2))} hours more otherwise you will be out of energy and need to replenish`);
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

student.updateEquipment('fishing rod');
uniform.changeUniform('green',4,'suede');
student.timeStudied(120);
student.timeStudied(120);
student.timeStudied(210);
student.timeStudied(12*700);



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
