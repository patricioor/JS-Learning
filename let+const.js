const firstName = 'Patrício';
const lastName = 'Rios';
const currentYear = 2022;
const age = 28;
const height = 1.75; //meters
const weight = 95; //kg

let bmi; // bmi(body mass index) = weitght / (height)^2
bmi = weight/(height*height)
const yearBirth = currentYear - age;

console.log(`${firstName, lastName} have ${age} years old, weighs ${weight} kg.`);
console.log(`him height is ${height} meters and my bmi is:`,bmi)
console.log(firstName,`was born in`, yearBirth,`.`)