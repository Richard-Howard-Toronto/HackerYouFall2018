function helloWorld() {
  console.log("Well hello");
}
helloWorld();

function add(num1,num2) {
  let output = num1+num2;
  console.log(output);
}


const helloWorld2ES6 = () => {
  console.log('Helloworld2 ES6');
}
helloWorld2ES6();


const addNumbers = (num1,num2) => {
  let output = num1+num2;
  console.log(output);
}

add(12,34)

addNumbers(123,423)


// RETURN IS KEY

const addit = () => {
  for (var i = 1; i < 10; i++) {
  console.log(i);
  const addit = i;
  }
}

addit();

console.log(`the return value is ${addit()}`);
