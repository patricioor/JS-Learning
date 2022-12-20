function Pessoa(nome, sobrenome) {
  // atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function(){

  }

  // atributos ou métodos públiocos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => console.log(this.nome + 'sou um método');
}

const p1 = new Pessoa('Fulano', 'de Tal');
const p2 = new Pessoa('Beltrano', 'de Fora');
const p3 = new Pessoa('Ciclano', 'de Dentro')
p2.metodo()// beltrano: sou um método
console.log(p1.nome, p2.sobrenome, p3.nome)// Fulano de Fora Ciclano