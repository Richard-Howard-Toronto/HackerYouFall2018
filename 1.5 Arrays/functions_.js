const student = {
    name: 'Sam',
    age: 26,
    height: 120,
    getHeightInInches: function() {
        return student.height * 0.393701; // converts CM to Inches
    }
}
// console.log(student.getHeightInInches(200))

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
      console.log(`client asset type is ${[nestedArray]} and they have $${client[item][nestedArray]}`);
      }
    }
  else
  console.log(client[item]);
  }
