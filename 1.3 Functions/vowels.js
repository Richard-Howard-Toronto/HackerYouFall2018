
    // Write a function `charIsVowel(c)` that takes a character (i.e. a string of length 1) as argument and returns true if it is a vowel, false otherwise. E.g. `charIsVowel("b")` returns `false`.

    const charIsVowel = (char) => {

      if (typeof char === 'number') {
        console.log('you entered a number, not a letter');
        return;
      }

      if (char == char.toUpperCase())  {
          console.log('There is an upper case letter and we will change to lower case... hold on while I find it.');
      }

      char = char.toLowerCase();


      if (char.length > 1) {
        return 'string is more than one character so who knows if it is a vowel '
      } else {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          return true;
        } else {
          return false;
        }
      }
    }

    console.log(`is it a vowel? ${charIsVowel(2)}`)


    // once done, create seperate if statements for the following and log "yes it is a vowel / no it isn't a vowel"

    // Check if capital A is a vowel


    // check if c isn't s vowel (HINT: Remember opposites with !)


    // check if lowercase e AND uppercase O is a vowel


    // check if either x or u is a vowel

    // check that h isn't a vowel and e is a vowel
