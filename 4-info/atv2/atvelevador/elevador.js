export default class Elevador {

    constructor(totalandares, capacidade,)
    {
        this.totalandares = totalandares
        this.andaratual = 0
        this.capacidade = capacidade
        this.numeropessoas = 0
    }
    subir(){
        if(this.andaratual < this.totalandares)
        {
            this.totalandares++
            return true
        }
        else return false
    }
     descer(){
        if(this.andaratual < this.totalandares)
        {
            this.totalandares--
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
        if(this.numeropessoas > this.capacidade){
            this.numeropessoas = this.numeropessoas - numerosaidas
            return true
        }
        else return false
    }
}