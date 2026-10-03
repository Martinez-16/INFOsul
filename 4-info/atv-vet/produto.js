export default class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    apresentar(){
        return `Produto: ${this.nome} | Preço: ${this.preco} | Quantidade: ${this.quantidade}`
    }
}