function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    ficha(tipoFicha) {
      return `Aluno(a) ${this.nome} ${this.sobrenome} inserido. Será criada uma ficha para ${tipoFicha}.`
    },
    imc: function () {
      const indice = this.peso / this.altura ** 2 // fórmula do imc
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Patrício', 'Rios', 1.74, 97)
const p2 = criaPessoa('Gustavo', 'Fudido', 1.74, 87)
const p3 = criaPessoa('Maria', 'Caroline', 1.67, 78)

console.log(p1.ficha('Hipertrofia'))
console.log(`O imc de ${p1.nome} é :` + p1.imc())
console.log(p2.ficha('Emagrecer'))
console.log(`O imc de ${p1.sobrenome} é :` + p2.imc())
console.log(p3.ficha('Definição'))
console.log(`O imc de ${p3.sobrenome} é :` + p3.imc())
