import input from 'readline-sync'

let ttlfilhos = 0,
    ttlsalario = 0,
    moradores = 10


for(let mor = 0 ; mor <moradores ; mor++ )
{
    var fil = Number(input.questionInt('quantos filhos um dos moradores tem? '))
    var sal = Number(input.questionFloat('Quanto de salario ele deles recebe? '))

    ttlfilhos += fil
    ttlsalario += sal
}

let media_fil = ttlfilhos/moradores
let media_sal = ttlsalario/moradores

    console.log("Média de filhos: " + media_fil + '\n' + " Média de salario: " + media_sal)