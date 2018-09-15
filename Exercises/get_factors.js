//Enter a number and the function finds divisors for 0 to number;

function modFunction(num) {
    let mod = num;
    let array = [];

    while (mod > 0 && mod <= num) {
      if (num % mod == 0 && num - mod == 0 ) {
        array.push(mod);
        console.log(`if number and mod are equal then result is zero so ${num} mod ${mod} is zero.`);
      } else if (num % mod == 0) {
        array.push(mod);
        console.log(`${num} mod ${mod} is zero`);
      } else {
          // do nothing (have a kit kat)
        } // end of for
    mod--;
  } //end of while
  array.sort(function(a, b){return a-b});
  console.log(array.toString());
}
modFunction(19832530)
