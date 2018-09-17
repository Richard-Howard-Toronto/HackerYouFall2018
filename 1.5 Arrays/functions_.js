const student = {
    name: 'Sam',
    age: 26,
    height: 120,
    getHeightInInches: function() {
        return student.height * 0.393701; // converts CM to Inches
    }
}
console.log(student.getHeightInInches(200))
console.log(`---------- next question -----------`)



const client = {
  name: 'Bill',
  assets: {
    bonds: 200,
    stocks: 300,
    cash: 100
  },
  yieldOnBonds: 0.131,
  yieldOnCash: 0.063,
}

for (var item in client) {

  if (typeof client[item] === 'object') {

    let nestedArray = client[item];

    for (nestedArray in client[item]) {
      console.log(`asset type: ${[nestedArray]}: $${client[item][nestedArray]}`);
      }
    }
  else
  console.log(client[item]);
  }


console.log(`---------- next question -----------`)

// add item to array

const myArray = [111,20,31,4]
console.log(myArray)

myArray.push(5) // adds value to end
console.log(myArray)

myArray.unshift(99) // add value to beginning
console.log(myArray)

myArray.shift() // shift removes first value
console.log(myArray)

myArray.pop() // pop removes last value
console.log(myArray)

myArray.indexOf(20) // find index
console.log(myArray.indexOf(31))

console.log(myArray.reverse()) //reverse order of elements

console.log(myArray.toString()) //converts to string


console.log(`---------- next question -----------`)

const myBasket = {
    apples: 0,
    pears: 0,
    cheeses: 0,

    increment: function() {
      this.apples += 12 * 4 + 6
    },

    incrementPears: function() {
      this.pears += 30
    },

    addCheese: function() {
      this.cheese = 50;
    },
}

console.log(myBasket.apples);

myBasket.increment();

console.log(myBasket.apples);

myBasket.incrementPears();

console.log(myBasket);

myBasket.addCheese();

console.log(myBasket);

let arr = [5, 1, 8];
arr.forEach((element) => {
  console.log(element)
});
