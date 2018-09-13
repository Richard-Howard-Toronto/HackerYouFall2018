function biggerNumber(num1,num2) {
  console.log(`the first randomly generated number is ${num1*1000} and the second random number is ${num2*1000}`)
  let result = Math.max(num1*1000,num2*1000);
  console.log(`and the winner is ${result}`);
}

biggerNumber(Math.random(),Math.random())
