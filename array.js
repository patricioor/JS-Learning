//                 0       1          2
const students = ['John', 'Viktor' , 'Luffy']

delete students[1]; // ->[ 'John', <1 empty item>, 'Luffy' ]
console.log(students);

console.log(typeof students); // -> Objetct
console.log(students instanceof Array); // -> True


// to remove                 
// students.pop(); // -> Remove the last string: ['John', 'Viktor']
// students.shift(); // -> Remove the first string ['Viktor' , 'Luffy']
// console.log(students(0,-2))
// const removed = students.pop() // removed string will be appended to the variable. Can be used for '.shift()' too

// to addict
// students.unshift('Robin') // -> Robin index [0].
// console.log(students.length); // -> 3
// students.push('Frank')
// console.log(students.length); // -> 4
// students[students.length] = 'Chopper'
// console.log(students.length); // -> 5
// students[3] = 'Nami'; // ['Ace', 'Viktor' , 'Luffy', 'Nami']

// to replace
// students[0] = 'Ace'; // ['Ace', 'Viktor', 'Luffy']