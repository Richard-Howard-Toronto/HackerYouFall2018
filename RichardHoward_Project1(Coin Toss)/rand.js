// const values = [];
//
// function randn_bm() {
//
//       var u = 0, v = 0;
//       while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
//       while(v === 0) v = Math.random();
//       let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
//       num = num / 10.0 + 0.5; // Translate to 0 -> 1
//
//       values.push(num);
//       console.log(values);
//       return num;
//     }
//
// randn_bm();



var array = [];

for (var i = 0; i < 5; i++) {


  var u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  array.push(num);
  // console.log(array);

}


let total = 0;
let array = [1,2,3,4,5,6,7,8,9]

const add = (a,b) => {
    return a + b;
}

total = add(array); // add refers back to the variables and returns the numerical operations on those variables

console.log(total)
