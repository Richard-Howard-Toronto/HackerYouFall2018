const persons = [
  {first: 'Richard' , last: 'Howard' },
  {first: 'Richie' , last: 'How' },
  {first: 'Rich' , last: 'Ard' }
]


const combinedNames = persons.map((person)  => {

  // to create a brand new array

  if (person.first === "Richard") {
    return `${person.first}  ${person.last}`;
  } else {
    return `${person.last}`;
  }


});


console.log(combinedNames);
