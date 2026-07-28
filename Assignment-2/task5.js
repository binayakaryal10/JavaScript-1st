console.log("Name: Binayak Raj Aryal");


const subjects=['DS','OOP','Statistics','Maths','Microprocessor'];

console.log("Subjects:");
subjects.forEach(function(subject){
    console.log(subject);
});

const upperSubjects = subjects.map(function(subject) {
    return subject.toUpperCase();
});
console.log("Uppercase Subjects:");
console.log(upperSubjects);