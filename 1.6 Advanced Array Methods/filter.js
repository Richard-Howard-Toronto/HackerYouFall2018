const names = ['Sam', 'Jamie', 'Alex', 'Andy', 'August', 'Chris', 'Dakota', 'Drew', 'Max'];

// create a brand new array for names that are only three letters or shorter

const filterednames = names.filter((names) => {

  if (names.length <= 3) {
    return true;
  } else {

  }

});

console.log(filterednames);
