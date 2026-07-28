console.log("Name: Binayak Raj Aryal");


const students=[
    {name:"Binayak", rollNo:24, marks:77},
    {name:"Ram", rollNo:2, marks:82},
    {name:"Hari", rollNo:14, marks:47},
    {name:"Sita", rollNo:12, marks:20},
];

const passedStudents=students.filter(students=>students.marks >=40);
console.log(passedStudents)

const findStudent = students.find(student => student.rollNo === 24);
console.log("Student:")
console.log(findStudent.name)