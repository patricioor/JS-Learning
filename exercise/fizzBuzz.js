// function fizzBuzz(x) {
//   if (x % 3 === 0) {
//     if (typeof x !== 'number') return x
//       if (x % 5 === 0) {
//         if( x % 3 === 0 && x % 5 === 0){
//           return 'FizzBuzz';
//         }
//         return 'Buzz';
//       }
//       return 'Fizz'
//   }
//   if (x % 5 === 0){
//     if (typeof x !== 'number') return x
//     return 'Buzz';
//   } { return `${x}`}
// }

function fizzBuzz(x) {
   if (typeof x !== 'number') return x;
   if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
   if (x % 3 === 0) return 'Fizz';
   if (x % 5 === 0) return 'Buzz';
   return x;
}

for (let i = 0; i <= 100 ; i++) {
  console.log (i, fizzBuzz(i))
}