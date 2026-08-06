let nome = "joacir"
let sobrenome = "silva"
let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
let sobrenomeFormatado = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();


    console.log("Nome em letras maiúsculas: ", nome.toUpperCase() + " " + sobrenome.toUpperCase() )
    console.log("Nome em letras maiúsculas: ", nome.toLowerCase() + " " + sobrenome.toLowerCase() )

let nomeCompleto = nomeFormatado + " " + sobrenomeFormatado

    console.log("Nome completo: ", nomeCompleto , "(possui ", nomeCompleto.length, "caracteres)")