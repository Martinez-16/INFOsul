import Produto from './produto.js'

let prod1 = new Produto("Mouse", 70, 200)
let prod2 = new Produto("Teclado", 150, 100)
let prod3 = new Produto("Monitor", 1200, 50)
let produtos = []

produtos.push(prod1, prod2, prod3)

for(let i=0 ; i<produtos.length ; i++){
    console.log(`${produtos[i].apresentar()}`)
}

console.log("Produto a ser excluido: Mouse")

var posicao = produtos.findIndex(produto => produto.nome == "Mouse");

if(posicao == 0){
    console.log("Produto não encontrado")
} else produtos.splice(posicao, 1)

console.log(" \n Lista Atualizada \n")

for(var i = 0; i < produtos.length; i++ ){
   console.log(produtos[i].apresentar() )
}