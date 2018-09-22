// an array which has a series of values i

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

//filter for studnets with grades above >// XXX:


const highGrades = students.filter ((student)  => {

  if (student.grade > 70) {
    return true;
  } else {

  }

});

console.log(highGrades);
