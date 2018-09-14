function countLetter(array,letter) {
  let count = 0;
  for (var i = 0; i < array.length; i++) {

    if (array[i] === ' ' || array[i] === ',') {
      console.log('');
    }

    else {

    if (array[i] === letter) {
      console.log(`${array[i]} in array is equal to the letter ${letter}`);
      count = count + 1;
    } else {
      if (array[i] !== letter) {
        console.log(`${array[i]} is not equal to ${letter}`)
    }
  }
  console.log(`count is ${count}`)
}
}
}

countLetter("Write an o, and another o",'o')
