const person = { name: "Lal Mia", age: 13, profession: "painter" };
console.log(person);
console.log(person.toString());
console.log(JSON.stringify(person));

const personString = JSON.stringify(person);
const personConverted = JSON.parse(personString);
console.log(personConverted);
