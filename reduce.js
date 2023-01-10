// Somar todos os números
// Retorne um array com os números pares(Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
  return acumulador + valor
},0)
console.log(total)

const pares = numeros.reduce((acumulador,valor) => {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
},[])
console.log(pares)

const dobro = numeros.reduce((acumulador,valor) => {
  acumulador.push(valor*2)
  return acumulador
},[])
console.log(dobro)