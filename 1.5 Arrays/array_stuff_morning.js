// an object, not in order, curly brackets

const musicObject = {
  name: 'Richard',
  age: 45,
  address: 'Texas'
}

console.log(musicObject);
musicObject.age = 55;
console.log(musicObject);


// function and array are types of objects

// an array, everything in order, square brackets, indexed

const musicObjectArray = [
   'Richard',
   45,
   'Texas'
]

console.log(musicObjectArray)
console.log(musicObjectArray[1])

// any js object can be stored in an array: functions, other arrays, objects, numbers, strings, booleans ....

const musicArray_example = [ "do", "re", "mi", "fa", "so", "la", "ti", "dooooooooo!" ];

console.log(musicArray_example);
console.log(musicArray_example[7]);
console.log(musicArray_example[musicArray_example.length-1]);

// replace sol with sunny

musicArray_example[4]='sunny';
musicArray_example[5]=[1,2,4];

console.log(musicArray_example);

var theArray = ["hello world!", 34, { name: "First", age: 66 } ]

console.log(theArray);
console.log(theArray[1]);
theArray[0]="hi earth, the new wording..."; // updating the element inside theArray, even though theArray has been declared a constant.
console.log(theArray);
console.log(typeof theArray[2]);
console.log(`the age in this ... is ${theArray[2].age}`);

theArray[2].name = "Sam";

console.log(theArray[2]);

let theNArray = ["hello world!", [1,2,3], { name: "First", age: 66 } , {size: {
  a: 1,
  b: 2,
  c: 3
}, color: 'green'}]
