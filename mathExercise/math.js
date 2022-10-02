// let num1 = 0.974847;
// let num2 = (num1); 
// console.log(Math.floor(num2)) // console: 0  // floor: rounds to the nearest whole number
// console.log(Math.ceil(num2)) // console: 1 // ceil: rounds to the biggest whole number more near
// console.log(Math.round(1.49))// If number is x.50 or above = x+1.0. If number is below of x.50 = x.0.
// console.log(Math.max(1,23,51,324,5,123,152)) // console: 324. Catch the large number.
// console.log(Math.min(100,57,8972,25555,-1,254)) // console: -1. Catch the smaller number

// const random = Math.round(Math.random())* (5 - 20) + 5;
// console.log(random)

const num1 = Number(prompt(`Insert number:`));
const titleNum = document.getElementById(`Number-title`)
const text = document.getElementById(`text`)
titleNum.innerHTML = num1

text.innerHTML = 
`<p> Square root of the entered number is: ${num1 ** 0.5}<br/>
  Is the entered number an integer? ${Number.isInteger(num1)}<br/>
Is the number "NaN"? ${Number.isNaN(num1)}<br/>
The entered number rounded down is ${Math.floor(num1)}<br/>
The entered number rounded up is ${Math.ceil(num1)}<br/>
The entered number limited to two places is ${num1.toFixed(2)}</p>`;