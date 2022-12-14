function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    get nomeCompleto(){
      return `${this.nome, this.sobrenome}`
    },
    ficha(tipoFicha) {
      return `Aluno(a) ${this.nome} ${this.sobrenome} inserido. Será criada uma ficha para ${tipoFicha}.`
    },
    get imc() {
      const indice = this.peso / this.altura ** 2 // fórmula do imc
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Patrício', 'Rios', 1.74, 97)
const p2 = criaPessoa('Gustavo', 'Thé', 1.74, 87)
const p3 = criaPessoa('Maria', 'Caroline', 1.67, 78)

console.log(p1.ficha('Hipertrofia'))
console.log(`O imc de ${p1.nomeCompleto} é : ${p1.imc}`)
console.log(p2.ficha('Emagrecer'))
console.log(`O imc de ${p2.nomeCompleto} é : ${p2.imc}`)
console.log(p3.ficha('Definição'))
console.log(`O imc de ${p3.nomeCompleto} é : ${p3.imc}`)
