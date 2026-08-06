import input from 'readline-sync'

let nome = input.question('Escreva seu nome: ')
let email = input.questionEMail('Escreva seu Email: ')
let numero = input.question('Escreva seu numero:')

    console.log(`Seu nome é ${nome}`)
    console.log(`Seu email é ${email}`)
    console.log(`Seu numero é ${numero}`)
