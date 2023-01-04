// Retorne um novo array com as pessoas que possuem 5 ou mais letras no nome
// Retorne as pessoas com mais de 50 anos
// Retorne as pessosa cujo nome termina com 'a'

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50)
const pessoasQueTerminamComA = pessoas.filter(obj => obj.nome.endsWith('a'))

console.log(pessoasComNomeGrande)
console.log(pessoasComMaisDe50Anos)
console.log(pessoasQueTerminamComA)