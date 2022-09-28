//     index: 01234567
let string = 'One text';

console.log(string[4]) // character chosen at index [4] was "t".

//what index represents the beginning of the word 'text'(or first letter "t")?
console.log(string.indexOf('text'))

// it's possible to start the search from the end to the beginning.
console.log(string.lastIndexOf('t'))
// and start the search in a index, using indexOf or lastIndexOf, to search for the position of a  specific letter.
console.log(string.indexOf('x', 3)) // looking for the letter 'x', starting the search at position [3] of index.

//if search one word with wrong formatting, will be displayed "-1" it console.

console.log(string.concat(' other text'))
console.log(string + ' other text')
console.log(`${string} other text`)

//the array "match" can search an interval determined. Ex: (/[A-z]/) will search all letter, or, can use /[a-z]/ or /[A-Z]/ for specific necessity(at what index the sentence is starting). If use tag "g"(ex: (/[A-z]/g)), the display show all letters(only letters) belonging to that string. 
console.log(string.match(/[a-z]/)) //[ 'n', index: 1, input: 'One text', groups: undefined ]

//the function "search" can search the exacly index of the letter requested.
console.log(string.search(/t/)) //[ 't', index: 4, input: 'One text', groups: undefined ]

// can be use to replace new letters, or words, in the variable. This action only will have effect on the first character(ex: ("e", "$"), On$ text ). If the necessity is replace all pointed characters, can use the tag "g" after the letter, or word, that will be replaced . Result: console.log(string.replace(/e/g, "#")) On# t#xt
console.log(string.replace(/One/, "By")) // Result: By text

// If the necessity is know how many characters have on the variable, can be use the the function ".length".
console.log(string.length)

// Is possible catch one sequence on the index. If it is known the break of the word, or letter, what you need, can you use "slice" for execute this action.
console.log(string.slice(4, 8)) // Result: "text"
// Note that to capture a whole word, it was necessary to put a range from x to y+1. it happens that the counter replicates the characters until immediately before the target number.

//If you need to make the string all uppercase or lowercase can use thats functions
console.log(string.toUpperCase()) // result: ONE TEXT
console.log(string.toLowerCase()) // result: one text