//                 0       1          2
const students = ['John', 'Viktor' , 'Luffy']

delete students[1]; // ->[ 'John', <1 empty item>, 'Luffy' ]
console.log(students);

console.log(typeof students); // -> Objetct
console.log(students instanceof Array); // -> True



//                  Remove
// students.pop(); // -> Remove the last string: ['John', 'Viktor']
// students.shift(); // -> Remove the first string ['Viktor' , 'Luffy']
// console.log(students(0,-2))
// const removed = students.pop() // Removed string be attached on variable. Can be used to '.shift()' too

//                  Addict
// students.unshift('Robin') // -> Robin index [0]. 
// console.log(students.length); // -> 3
// students.push('Frank')
// console.log(students.length); // -> 4
// students[students.length] = 'Chopper'
// console.log(students.length); // -> 5
// students[3] = 'Nami'; // ['Ace', 'Viktor' , 'Luffy', 'Nami']

//                  Replace
// students[0] = 'Ace'; // ['Ace', 'Viktor' , 'Luffy']
// students[students.length] = 'Sanji'
// console.log (students) -> ['Ace', 'Viktor' , 'Luffy', 'Sanji']
// console.log (students[0]) -> ['Ace']
// console.log (students[2]) -> ['Luffy]