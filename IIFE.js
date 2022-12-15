(function (idade, peso, altura) {
  const sobrenome = 'Rios'

  function criarNome(nome) {
    return nome + ' ' + sobrenome
  }

  const falaNome = () => {
    console.log(criarNome('Patrício'))
  }

  console.log(
    `Os dados inseridos foram: idade: ${idade}, peso: ${peso}, altura: ${altura}.`
  )

  falaNome()
})(28, 97, 1.74)
