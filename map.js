// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nom" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  {nome: 'Patrício', idade: 28},
  {nome: 'Carol', idade: 30},
  {nome: 'Gustavo', idade: 27},
  {nome: 'Renan', idade: 27},
  {nome: 'Marcelo', idade: 29},
  {nome: 'Iago', idade: 29},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes)
const idades = pessoas.map(obj => ({idade: obj.idade}) ) //  delete obj.nome
console.log(idades)
const ids = pessoas.map((obj,indice) => {
  const newObj = {...obj};
  newObj.id = indice + 1001;
  return newObj;
} )
console.log(ids)


