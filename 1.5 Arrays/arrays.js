var theArray = ["hello world!", 34, { name: "Jim", age: 66, talents: "none" } , {name: "Steve", age: 50, talents: {
  music: true,
  dance: {
    breakdanceing: false,
    waltzing: {
      book: "how to waltz",
      secondbook: "easy waltz2" },
    chacha: false },
  biking: true
}}]

// to get the second value
console.log(theArray[1]);

// to update the first value
theArray[1] = "new value"
console.log(theArray[1]);

// Retrieve the age property of the object in the array.
console.log(theArray[2].age);

// Update the name property of the object in the array to "Sam".
console.log(theArray[2].name="Sam");
console.log(theArray);

// return the boolean of cha cha for Steve.
console.log(theArray[3].talents.dance.chacha);

// update the boolean of dance for Steve to true.
theArray[3].talents.dance.chacha = true;
console.log(theArray[3].talents.dance.chacha);

// get book title of dance for Steve to true.
console.log(theArray[3].talents.dance.waltzing.book);
console.log(theArray[3].talents.dance.waltzing.secondbook);

//update second book to "Advanced Waltzing"
theArray[3].talents.dance.waltzing.secondbook="Advanced Waltzing"
console.log(theArray[3].talents.dance.waltzing.secondbook);
