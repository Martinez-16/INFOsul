import Atleta from "./atleta.js";
import input from 'readline-sync'

let nome = input.question("Informe seu nome de atleta: ")
let idade = input.questionInt("Informe sua idade: ")
let altura = input.questionFloat("Informe sua altura")
let peso = input.questionFloat("Informe seu peso")
let atleta = new Atleta (nome, idade, altura, peso)

console.log("Esse App calcula se você ja pode se aposentar.")
console.log("Calculando...")
setTimeout(2)
calculo