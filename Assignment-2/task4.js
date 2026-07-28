console.log("Name: Binayak Raj Aryal");


const languages = ["Python", "JavaScript", "C++"];
const copiedLanguages = [...languages, "Java"];
const [firstLanguage, ...remainingLanguages] = copiedLanguages;



console.log("Copied Array:", copiedLanguages);

console.log("First Language:", firstLanguage);
console.log("Remaining Languages:", remainingLanguages);