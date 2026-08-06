/*1. Escreva um programa em JavaScript que declare variáveis para o valor de
um produto, o percentual de desconto, calcule e mostre o preço final do
produto arredondado com duas casas decimais.*/

var produto= 200
var desconto=(100/20)
var desc = (produto - desconto)


console.log ("valor inteiro =", produto.toFixed(2))
console.log("valor do desconto = ", (produto/desconto).toFixed(1))
console.log("produto com desconto = ", desc.toFixed(2))
