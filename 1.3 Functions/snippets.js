function helloWorld() {
    console.log("Hello there!");
}
helloWorld();

console.log('----------------------------');

const add = (a,b) => {
    console.log(`${a} plus ${b} = ${a+b}`);
};
add(Math.trunc(Math.random()*100),Math.random()*100)

console.log('----------------------------');

const addPi = () => 3 + 4;
console.log(addPi());

console.log('----------------------------');

function nameOfFunction(parameter1, parameter2) {
    console.log(parameter1 ** parameter2)
}
nameOfFunction(3,3)

console.log('----------------------------');

const anotherNameOfFunction = (parameter1, parameter2) => {
    console.log(Math.sqrt(parameter1) + parameter2)
}
anotherNameOfFunction(9,3)

console.log('----------------------------');

const add1 = (a,b) => {
    return a+b;
}
let num = add1(10,20);
console.log(num);

console.log('----------------------------');

// A variable created outside of a function is available to be used within.

  let fish = 'Jaws';

        const sayHitoJaws = () => {
            console.log(`this movie is called ${fish}`); // will log out Jaws
        }

        sayHitoJaws();

console.log('----------------------------');

const hello = () => {
    let dog = 'Dog is Prudence';
    console.log(dog);
    let pi = 3.14;
    console.log(pi);
}

hello(); // will log out 'Dog is Prudence'
// pi(); // pi is not defined
// console.log(dog); // will return 'dog is not defined'

console.log('----------------------------');


let dog = 'Prudence, outside of the function';

const hello1 = () => {
    dog = 'Hank, locked inside the scope';
    console.log(dog);
}

console.log(dog); // will log out 'Prudence'
hello1(); // will log out 'Hank'
console.log(dog); // will log out 'Hank'
