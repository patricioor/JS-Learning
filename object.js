function creatElement (name, lastname, age) {
  return {name, lastname, age}
}

const element1 = creatElement("Brad", "Pitt", 58)
const element2 = creatElement("Terry", "Crews", 54)
const element3 = creatElement("Adam", "Sandler", 56)
const element4 = creatElement("Will", "Smith", 58)

console.log(element1.name, element4.lastname, element2.age)



const element5 = {
  name: 'Patrício',
  lastname: 'Rios',
  age: 27,
  // function inside a const is called "method"
  say() {
    console.log(`My name is ${this.name}, current age is ${this.age}`)
  },

  incrementAge() {
    this.age++
  },

  changeName() {
    this.name = "Bread"
  }
};

element5.say();
element5.incrementAge();
element5.say()
element5.changeName()
element5.say()