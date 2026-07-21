console.log("Name: Binayak Raj Aryal");
console.log("Roll:");

let name="Binayak";

let marks=[73,89,72];
let total=0;
for(let i=0;i<3;i++){
    total+=marks[i];
}
let average=total/marks.length;

console.log("Student Name: ", name);
console.log("Total Marks: ", total);
console.log("Average: ", average);

if(average>40){
    console.log("Result: Passed");
}
else{
    console.log("Result: Failed");
}


