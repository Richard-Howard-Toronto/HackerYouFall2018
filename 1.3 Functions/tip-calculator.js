// create a Tip calcuator function that takes in three things: 1) meal price, 2) Tax Rate 3) Tip Rate
// It should return a value which you can console.log.
// Have the function default to 13% tax and 15% tip

// eg: let total = restaurantBill(100,0.13,0.15);
// console.log(`Your total bill is $${total}`);

// BONUS: Make the function return a string formatted $x.xx

const billCalc = (pretax_price,tax_inPercent,tip_inPercent) => {

  console.log(`pretax_price is ${pretax_price}`);
  console.log(`tax_inPercent is ${tax_inPercent}`);
  console.log(`tip_inPercent is ${tip_inPercent}`);

  let bill = (pretax_price * (1 + tax_inPercent)) * (1 + tip_inPercent)
  console.log(`Your total bill is $${bill.toFixed(2)}. Please pay at the cash.`);
}

billCalc(100,.15,.13)
