let x = [1, 2, 3];
let y = x;
let z = y;

console.log(x,y,z); //console: [ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 2, 3 ]

y.push(4);
console.log(x,y,z); // console: [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

z.pop();
console.log(x,y,z); // console: [ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 2, 3 ]

y = [...x];
y.push(7)
z.push(4)
x.push(5)
console.log(x,y,z) // console: [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 7 ] [ 1, 2, 3, 4, 5 ]

const a = {
  name: "Patrício",
  lastName: "Rios"
}

const b = {...a}    // const b = a
b.name = "Caroline";// b.name = "Caroline";
                    // console : { name: 'Caroline', lastName: 'Rios' } { name: 'Caroline', lastName: 'Rios' }

console.log(a,b) // console: { name: 'Patrício', lastName: 'Rios' } { name: 'Caroline', lastName: 'Rios' }