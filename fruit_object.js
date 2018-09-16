const fruits = {
  apples: 10,
  oranges: 20,
  bananas: 20,
  milk: false
}

console.log(`there are ${fruits.apples} apples and ${fruits.oranges} oranges .... and so on`)

      for (var you_name_it_variable in fruits) {

        if (typeof you_name_it_variable === 'string') {
            console.log(`there are ${fruits[you_name_it_variable]} ${you_name_it_variable}`)
        } else {
            console.log(`any ${you_name_it_variable}? : ${fruits[you_name_it_variable]}`)
        }
      }

      const inventory = {
        apples: 10,
        oranges: 20,
        bananas: 40,
        milk: false
      }

    let message = '';
    let total = 0;

        for (var grocery in inventory) {
            message += `${inventory[grocery]} ${grocery},`;
            total = total + inventory[grocery];  // or   total +=  inventory[grocery];
        }

        console.log(message);
        console.log(total);
