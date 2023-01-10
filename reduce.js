// Somar todos os números
// Retorne um array com os números pares(Filter)
// Retorne um array com o dobro dos valores (Map)
// Retorne a pessoa mais velha
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
  {nome: 'Patrício', idade: 28},
  {nome: 'Carol', idade: 30},
  {nome: 'Gustavo', idade: 27},
  {nome: 'Renan', idade: 27},
  {nome: 'Marcelo', idade: 29},
  {nome: 'Iago', idade: 29},
];

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

const pessoaMaisVelha = pessoas.reduce((acumulador,valor) => {
  if(acumulador.idade > valor.idade)return acumulador
  return valor
})
console.log(pessoaMaisVelha)
