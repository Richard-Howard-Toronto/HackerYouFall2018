
let count = 0;
function vowelCount(string) {

  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i'|| string[i] === 'o'|| string[i] === 'u')

    {
    count++;
    console.log(`${string[i]} is a vowel`);
    }

    else

    {
      //do nothing
    }
    //else ends
  }
  //for loop ends so do the summary
  console.log(`There are ${count} vowels`);
//function ends
}

vowelCount('test of string');
