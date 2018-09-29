

var n = 0;

function increment(num){
  n = n + num;
  return n;
}

increment(12);
increment(12);

console.log(n)

var increment = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0)); // -1 if you want the first increment to return 0

console.log(increment());
console.log(increment());
console.log(increment());
