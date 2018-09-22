// reduce

// rather than changing, we are reducing the values to a single value in the array

// with reduce you need two values, the total and the current value

const ages = [1,2,3,4];

const totalages = ages.reduce((totalAges, age) => {

  return totalAges + age;

});

console.log(`totalages is ${totalages}`);
