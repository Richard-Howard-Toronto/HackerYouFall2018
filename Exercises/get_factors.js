//Enter a number and the function finds divisors for 0 to number;

function modFunction(num) {
    let mod = num;
    let array = [];

    while (mod > 0 && mod <= num) {
      if (num % mod == 0 ) {
        array.push(mod);
        console.log(`yes ${num} mod ${mod} is zero`);
        } else {

        } // end of for
    mod--;
  } //end of while
  array.sort(function(a, b){return a-b});
  console.log(array);
}
modFunction(99)
