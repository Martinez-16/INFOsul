import Funcionario from "./Funcionario.js"

var funcionario = new Funcionario("Joao", 21, 2100)
console.log(`Nome: ${funcionario.nome}`)
console.log(`Idade: ${funcionario.idade}`)
console.log(`Salario: ${funcionario.salario}`)
console.log("Imposto: 15%")

console.log(`Valor do imposto de renda: ${funcionario.calculoIR(15)}`)


