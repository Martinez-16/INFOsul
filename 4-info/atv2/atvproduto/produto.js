export default class Produto{


    constructor(nome, marca, preco, quantidade )
    {
        this.nome = nome
        this.marca = marca
        this.preco = preco
        this.quantidade = quantidade
    }

    
        vender(quantidade){
            this.quantidade-= quantidade;
        }
    
}