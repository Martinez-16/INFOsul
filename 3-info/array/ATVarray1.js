let nota = [10 , 9 , 9 , 4 , 8 , 2.7 , 6.8 , 5.5 ,6.5],
    soma = 0

    for(i=0 ; i < nota.length ; i++)
    {
        soma += nota[i]

    }

var media = soma / nota.length

if(media >= 6)
{
    console.log("Você foi aprovado com média: ", media)
}
else 
    console.log("Você foi reprovado com média: ", media)