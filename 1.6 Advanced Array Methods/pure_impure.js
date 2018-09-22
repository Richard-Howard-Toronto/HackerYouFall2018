// impure

let total = 0;

const add = (a,b) => {
  total = a + b;
}

add(1,2)
console.log(total)

// pure

let total_ = 0;

const add_ = (a,b) => {
  return a + b;
}

total_ = add_(1,9)

console.log(total_)
