


const warrior = {
  type: "Paladin",
  equipment: ["bow","arrow","horse","potion"],
  age: 104,
  strength: 9,
  energy: 100,

  increaseStrength: function () {
    this.strength++;
    console.log(`your strength is now ${this.strength}`)// this.strength = ....
  },

  location: {
    x: 0,
    y: 0
  },

  // add method called walk
  walk: function(xCoord, yCoord) {
    console.log(`you are now at ${xCoord,yCoord}`);
    this.location.x = xCoord;
    this.location.y = yCoord;
  },

  // add a method called strike
  strike: function(energysappingforce) {
    this.energy = this.energy - energysappingforce;
    if (this.energy < 75) {
      console.log(`your energy is now at ${this.energy}, and you have only three turns left`)
    }
  },

  pickUpEquipment: function(newequipment) {
    console.log(`you picked up a ${newequipment}`);
    this.equipment.push(newequipment);
    console.log(`your equipment is now ${this.equipment}`);
  }

}

warrior.increaseStrength();
warrior.walk(200,4);
warrior.strike(30);
warrior.pickUpEquipment('Ametralladora')
warrior.pickUpEquipment('Plastic Fork')
