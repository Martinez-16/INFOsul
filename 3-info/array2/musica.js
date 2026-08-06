import input from 'readline-sync'
let musica = ["RAGE", "AUTOBAHN", "CEMITERIO", "VIDIGAL", "ORAÇÂO"]
let tempo = [164, 260, 250, 340, 320]

    for(let a=0; a<musica.length ; a++)
    {
        if(tempo[a] > 300)
        {
            console.log(`A musica ${musica[a]} é longa e possui ${tempo[a]} segundos`)

        }
        else if(tempo[a] < 300  && tempo[a] > 180 )
        {
            console.log(`A musica ${musica[a]} tem tempo medio e possui ${tempo[a]} segundos`)

        }
        else if(tempo[a] < 180)
        {
            console.log(`A musica ${musica[a]} é curta e possui ${tempo[a]} segundos `)
        }


    }