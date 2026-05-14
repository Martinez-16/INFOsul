let nome = window.prompt('Qual seu nome?')
let idade = window.prompt('Qual sua Idade?')

if(idade >= 18)
{
    alert(`Olá ${nome} , Você é maior de idade e tem ${idade} anos.`)
}
else if(idade < 0)
{
    alert('insira uma idade valida!')
}
else 
    alert(`Olá ${nome}, Você é menor de idade e tem ${idade} anos.`)