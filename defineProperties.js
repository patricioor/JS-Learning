// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  let nomePro = nome;
  let precoPro = preco;
  let estoquePro = estoque;

  
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      configurable: true, // Se pode apagar ou reconfigurar
      get: () => nomePro,
      set: (valor) => {
        if(typeof valor !== 'string') throw new TypeError('Tem que ser uma string!!');
        nomePro = valor;
      }
    },
    preco: {
      enumerable: true, // mostra a chave
      configurable: false, // Se pode apagar ou reconfigurar
      get: () => precoPro,
      set: (valor) => {
        if (typeof valor !== 'number') throw new TypeError('Tem que ser um number!!');
        precoPro = valor;
      }
    },
    estoque: {
      enumerable: true,
      configurable: true,
      get: () => estoquePro,
      set: (valor) => {
        if (typeof valor !== 'number') throw new TypeError('Tem que ser um number!!');
        estoquePro = valor;
      }
    }
  })
}
const descricaoCompleta = () => `Produto: ${p1.nome}, Preço: R$${p1.preco},00, Estoque: ${p1.estoque}`
const p1 = new Produto('Camiseta', 100, 3);
console.log(Object.getOwnPropertyDescriptors(p1))
