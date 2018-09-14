function secondHighest(array) {
  let sortarray = (array.sort(function(a, b){return a-b}));
  console.log(sortarray);
  console.log(`index of array from 0 to ${sortarray.length-1}`);
  console.log(`desired index spot is therefore ${sortarray.length-2}`);
  console.log(`second highest number is ${sortarray[sortarray.length-2]}.`);
}

secondHighest([1,511,811,22,5])
