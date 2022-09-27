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

//Array "match" can search an in interval determined. Ex: (/[A-z]/) will search all letter, or, can use /[a-z]/ or /[A-Z]/ for specific necessity.
console.log(string.match(/[A-z]/))
