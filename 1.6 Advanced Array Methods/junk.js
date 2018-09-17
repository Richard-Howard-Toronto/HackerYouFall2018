const dogs = ['Snickers', 'Prudence', 'Dug'];

for (let i = 0; i < dogs.length; i = i + 1) {
    console.log(dogs[i]);
}

const cats = ['SnickMeow', 'PrudeMeow', 'Meow'];
cats.forEach((cat) => {
    console.log(cat);
});

const numbers = [10, 100, 25, 20];

const halfNumbers = numbers.map((value) => {
    return value / 2;
});

console.log(typeof numbers);
console.log(typeof halfNumbers);
console.log(halfNumbers);
//[5, 50, 12.5, 10];


for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    for (var k = 1; k <= 5; k++) {
    console.log(`i: ${i} j: ${j} k: ${k} and i * j * k is ${i*j*k}`)
      }
    }
  }


const persons = [
    {first: 'Taylor', last: 'Swift'},
    {first: 'Ash', last: 'Ketchum'},
    {first: 'Hermione', last: 'Granger'}
];
const people = persons.map((ourvalue) => {
    return (`${ourvalue.first} ${ourvalue.last}`);
});
console.log(people);





const names = ['Sam', 'Jamie', 'Alex12345', 'Andy', 'August', 'Chris', 'Dakota', 'Drew', 'Max','Steve','Fester','Dracula','Jo'];

const shortNames = names.filter((name) => {
    if(name.length <= Math.random()*10) {
        return true;   // check is out
    }
});

console.log(shortNames);




const students = [
    {
        name: 'Pat',
        grade: 58
    },
    {
        name: 'Taylor',
        grade: 93
    },
    {
        name: 'Dale',
        grade: 80
    },
    {
        name: 'Casey',
        grade: 78
    },
    {
        name: 'Jo',
        grade: 68
    }
];

const honours = students.filter((student) => {
    return student.grade >= 50;
});

console.log(honours)




const ages = [1,2,2,3];

const totalAges = ages.reduce((totalvalue, currentValue) => {
    return totalvalue + currentValue;  // why is this not the sum of the parts (or the parts are not the components of the sum)
});

console.log(totalAges);
// 228


const nums = [[1, 2, 3], [4, 5, [5,6,[7,8,9]]], [10, 11, 12]];
const flat = nums.reduce((total, amount) => {
    return total.concat(amount);
});



let notFlatArray = [[0, 1, 2], [3, 4, [5,6,[7,8,9]]], [10, 11, 12]];
console.log(notFlatArray)
