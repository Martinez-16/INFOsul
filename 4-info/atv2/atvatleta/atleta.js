export default class Atleta {

    constructor(nome, idade, altura, peso){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }
    calculoAp(){
         if(this.idade < 40){
            
            return 40 - this.idade
        }
        else return 0
    }
    okaposent(){
        if(this.idade >=40){
            return true
        }
        else return false
    }
}