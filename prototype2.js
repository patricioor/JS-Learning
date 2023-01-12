// Produtos - ecommerce
// Camiseta e caneca
function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (value) {
  if (typeof value !== 'number') {
    return this.preco
  }
  {
    if (value >= 0) this.preco = this.preco + (this.preco * (value / 100))
  }
}
Produto.prototype.desconto = function (value) {
  if (typeof value !== 'number') {
    return this.preco
  }
  {
    if (value >= 0) this.preco = this.preco - ( this.preco * (value / 100))

  }
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Azul')

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: () => estoque,
    set: function(value) {
      if (typeof value !== 'number') return;
      estoque = value
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca com alça', 15, 'porcelana', 22)
caneca.estoque = 100
console.log(caneca)
console.log(camiseta)
console.log(Produto)