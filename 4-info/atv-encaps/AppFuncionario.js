import Funcionario from "./Funcionario.js"

var funcionario = new Funcionario("Joao", 21, 2100)
console.log(`Ǹome: ${funcionario.nome}`)
console.log(`Idade: ${funcionario.idade}`)
console.log(`Salario: ${funcionario.salario}`)
console.log("Imposto: 15%")

funcionario.calculoIR(15)
console.log(`Salario pós imposto: ${funcionario.salario}`)


