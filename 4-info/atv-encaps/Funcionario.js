export default class Funcionario{
    #nome
    #idade
    #salario
    constructor(nome, idade, salario){
        this.#nome = nome
        this.#idade = idade
        this.#salario = salario
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

    get salario(){
        return this.#salario
    }

    set nome(valor){
        this.#nome = valor
    }
    set idade(valor){
        this.#idade = valor
    }
    set salario(valor){
        this.#salario = valor
    }
    calculoIR(imposto){
        return this.#salario*(imposto/100)
    }
}