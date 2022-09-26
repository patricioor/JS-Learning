// Arithmetic Operators -> * / + -
// + -> addition and concatenation
// (* / -) -> stardard
// (**) -> potentiation
// % -> rest of division
// Increment -> ++
// Decrement -> --
// Attribution operator -> +=(or other Arith.oper. ex: -= *=.. ) / timer = timer +1 => timer += 1
//const

/*Incremant Operator*/
let timer = 0; // only with let. const will give a display error for trying to modify the constant
timer++;
//timer++; -> timer = 1
timer--;
//timer--; -> timer = 0
console.log(timer)
//console.log(timer++) = 0
// addition will be done after the timer is displayed
//console.log(++timer) = 1
// addition will be done before the timer is displayed


const timer1 = parseInt('5.2'); // convert string(numeral) to intenger number(primitive), excluding the decimal places. Not taking into account the significant algorithm.
console.log(timer1); // timer1 = 5
console.log(typeof timer1); // typeof timer1 = number

const timer2 = parseFloat('5.2'); // convert string(numeral) to float number(primitive).
console.log(timer2); //timer2 = 5.2
console.log(typeof timer2) // typeof timer2 = number

const timer3 = number('15.68'); // convert string(numeral) to number(primitive), preserving its previous structure.
console.log(timer3); // timer3 = 15.68
console.log(typeof timer3); // typeof timer3 = number

