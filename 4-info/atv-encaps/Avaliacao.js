export default class Avaliacao {

    #nome
    #disciplina
    #nota1
    #nota2
    #media

    constructor(nome, disciplina, nota1, nota2) {
        this.#nome = nome
        this.#disciplina = disciplina
        this.#nota1 = nota1
        this.#nota2 = nota2
        this.calcularMedia()
    }

    get nome() {
        return this.#nome
    }

    get disciplina() {
        return this.#disciplina
    }

    get nota1() {
        return this.#nota1
    }

    get nota2() {
        return this.#nota2
    }

    get media() {
        return this.#media
    }

    set nome(nome) {
        this.#nome = nome
    }

    set disciplina(disciplina) {
        this.#disciplina = disciplina
    }

    set nota1(nota1) {
        this.#nota1 = nota1
        this.calcularMedia()
    }

    set nota2(nota2) {
        this.#nota2 = nota2
        this.calcularMedia()
    }

    calcularMedia() {
        this.#media = (this.#nota1 + this.#nota2) / 2
        return this.#media
    }

    calcularSituacaoAluno() {
        if (this.#media >= 7) {
            return "Aprovado"
        } else if (this.#media >= 5) {
            return "Recuperação"
        } else {
            return "Reprovado"
        }
    }
}