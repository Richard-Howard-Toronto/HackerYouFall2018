function countLetter(array,letter) {
  let count = 0;
  for (var i = 0; i < array.length; i++) {

    if (array[i] === ' ') {
      console.log('');
    }

    else {

    if (array[i] === letter) {
      console.log(`${array[i]} === ${letter}`);
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

countLetter("Write a function that that accepts two string arguments, a single letter... letter within the larger string, maybe an o, and another o",'o')
