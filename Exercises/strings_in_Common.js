function stringsInCommon(cats,dogs) {
  let count = 0;
  let commonTrait = [];
  for (var i = 0; i < cats.length; ) {
    cats[i];
    for (var j = 0; j < dogs.length; j++) {
      if (cats[i]===dogs[j]) {
      commonTrait.push(cats[i]);
        count++;
      }
      else {
        // do nothing
      }
    }
    cats[i++];
  }
console.log(`There are ${count} common elements in the two arrays and they are: ${commonTrait}.`)
}





const cats = ['loud','fluffy','fat','thin','meows','ginger','tabby','friendly']
const dogs = ['barks','thin','friendly','big','loud','barks'];
stringsInCommon(cats,dogs)
