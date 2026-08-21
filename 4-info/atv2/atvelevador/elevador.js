export default class Elevador {

    constructor(totalandares, capacidade,)
    {
        this.totalandares = totalandares
        this.andaratual = 0
        this.capacidade = capacidade
        this.numeropessoas = 0
    }
    subir(subidas){
        if(this.andaratual < this.totalandares)
        {
            this.andaratual = this.andaratual + subidas
            return true
        }
        else return false
    }
     descer(descidas){
        if(this.andaratual < this.totalandares)
        {
            this.andaratual = this.andaratual - descidas
            return true
        }
        else return false
    }
    entrar(numeroentrantes){
        if(this.numeropessoas + numeroentrantes <= this.capacidade){
            this.numeropessoas = this.numeropessoas + numeroentrantes
            return true
        }
        else return false
            
    }
    sair(numerosaidas){
        if(this.numeropessoas < this.capacidade){
            this.numeropessoas = this.numeropessoas - numerosaidas
            return true
        }
        else return false
    }
}