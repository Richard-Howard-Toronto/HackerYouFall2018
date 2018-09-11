const sayHello = (firstName, lastName, age, home) => {
    console.log(`Hello ${firstName} ${lastName}. You are ${age} years old and live in ${home}`);
}

sayHello('Drew', 'Minns', 32, 'Toronto');

const randomizer = (num1, num2, num3) => {
  const output = num1 * num2 * num3 * Math.random();
  console.log(`output is ${output}`)
}

randomizer(1,2,3)

const sayHello1 = (firstName, lastName, age, home) => {
    if (home === undefined) {
        home = 'Bern, by the patent office';
    }
    console.log(`Hello ${firstName} ${lastName}. You are ${age} years old and using the default address, we have decided that you live in ${home}`);
}

sayHello1('Albert', 'Einstein', 32,);



const logPet = (petName, petType) => {
    console.log(`${petName} is a ${petType}`);
}
logPet('snickers');




const logPet1 = (petName, petType = 'dog', location = 'toronto') => {
    console.log(`--------------------------`);
    console.log(`${petName} is a ${petType} in ${location}`);
}
logPet1('snickers'); // snickers is a dog
logPet1('coco', 'cat'); // coco is a cat
