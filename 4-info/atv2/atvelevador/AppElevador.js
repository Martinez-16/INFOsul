import Elevador from './elevador.js';

    let elevador = new Elevador(10, 6)
    console.log(`numero de Andares: ${elevador.totalandares}`)

    elevador.entrar(2)
    console.log(`pessoas no elevador: ${elevador.numeropessoas}`)

    elevador.subir(1)
    console.log(`Andar atual: ${elevador.andaratual}`)

    elevador.entrar(1)
    console.log(`numero após primeira subida: ${elevador.numeropessoas}`)

    elevador.subir(1)
    console.log(`Andar atual(segunda subida): ${elevador.andaratual}`)

    elevador.sair(3)
    console.log(`numero de pessoas após segunda subida: ${elevador.numeropessoas}`)

    elevador.subir(8)
    console.log(`Andar atual(terceira subida): ${elevador.andaratual}`)

    elevador.entrar(2)
    console.log(`numero de pessoas após terceira subida: ${elevador.numeropessoas}`)

    elevador.descer(10)
    console.log(`Andar atual(terceira descida): ${elevador.andaratual}`)