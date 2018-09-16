const hackeryou = {
  address: '123 main st',
  students: 30,
  courses: {
    coding: {
      HTML: 25,
      CSS: 20,
      JS: {
        coursetype: "in person",
        coursebooks: "intro to javascript"
      }
    },
    cooking: false
  },
  tuition: 3000,
  openSundays: false
}

console.log(hackeryou["courses"]["coding"]["JS"]["coursebooks"])


const student = {
  name: "homer",
  id: 123455,
  age: 14,
  gpa: 1,
  HighSchool: "Springfield High"
}

console.log(student)

console.log(`The name of the student is ${student.name} with id of ${student["id"]}.  He is ${student.age} and has a GPA of ${student.gpa} at ${student.HighSchool}`)
