
function numStringReverse(num) {

  let array = num.split('');
  let reverseArray = [];

  for (var i = 0; i < array.length; i++) {

    console.log(array[i]);
    reverseArray.push(array[i]);

  }

}

numStringReverse('1234')
