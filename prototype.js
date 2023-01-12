function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco
}

Produto.prototype.desconto = function(value) {
  if(value !== 0) {
    this.preco = this.preco - (this.preco * (value/100));
  } {return this.preco}
};
Produto.prototype.aumento = function(value) {
  if(value !== 0) {
    this.preco = this.preco + (this.preco * (value/100));
  } {return this.preco}
}

const p1 = new Produto('Camiseta', 100)
const p2 = {
  nome: 'Caneca',
  preco: 15,
}
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)

const p3 = Object.create(Produto.prototype,{
  preco: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 30
  }
});

p3.aumento(50)
console.log(p3)
