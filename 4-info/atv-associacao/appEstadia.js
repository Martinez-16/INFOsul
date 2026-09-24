import input from 'readline-sync'
import Estadia from './estadia.js'
import Cliente from './cliente.js'
import Categoria from './categoria.js'
import veiculo from './veiculo.js'

console.log("Cadastro do Cliente- \n")
let nome = input.question('Nome do cliente: ')
let cpf = input.question('CPF do cliente: ')
let celular = input.question('Celular do cliente: ')
let email = input.question('Email do cliente: ')
let cliente = new Cliente(nome, cpf, celular, email)

console.log('Cadastro de Categoria do Veiculo- \n')
let descricao = input.question('Descrição da categoria: ')
let valorHora = input.question('Valor da hora: ')
let categoria = new Categoria(descricao, valorHora)

console.log('Cadastro do Veiculo- \n')
let placa = input.question('Placa do veículo: ')
let odometro = input.question('Odômetro do veículo: ')
let proprietario = cliente
let categoriaVeiculo = categoria
let veiculo1 = new veiculo(placa, odometro, proprietario, categoriaVeiculo)

console.log('Cadastro da Estadia- \n')
let data = input.question('Data da estadia: ')
let horaEntrada = input.question('Hora de entrada: ')
let horaSaida = input.question('Hora de saída: ')
let estadia = new Estadia(data, horaEntrada, horaSaida, veiculo1)

estadia.calcularEstadia(categoria.valorHora)
console.log(`O valor da estadia é: R$ ${estadia.valorEstadia.toFixed(2)}`)
