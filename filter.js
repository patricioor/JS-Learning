// separar em um array apenas os elementos maiores que '10';
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// método sem '.filter'
// const n10 = [];
// for(numero of numeros){
//   if(numero >= 10) {
//     n10.splice(n10.lenght,0,numero)
//   }
// }

const n10filter = numeros.filter(valor =>valor > 10)

console.log(n10filter)