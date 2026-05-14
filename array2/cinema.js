import input from 'readline-sync'
let fila = ["", "", "", "", "", ""]

    for(let a=0 ; a < fila.length ; a++)
    {
        fila[a] = input.question(`Integrante ${a + 1}: ${fila[a]}`)

        let pos = fila[a].indexOf("M")
        if(pos != -1)
        {
            console.info(`o nome ${fila[a]} começa com M`)

        }
    }
         console.log(`Fila de tras pra frente: \n`)
        for(let c=fila.length - 1 ; c>=0 ; c--)
        {
          console.log(`${fila[c]}`)

        }

