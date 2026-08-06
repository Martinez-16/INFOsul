let num = (Math.floor(Math.random() * 20) + 1)


for(let i = 1 ; i>=0  ; i++)
{
    let resp = window.prompt(`Descubra qual o numero secreto`)
    let resp2 = parseInt(resp)
    if(resp2 == num)
    {
        window.alert('Parabens!,você acertou!')
        window.alert(`Numero de tentativas: ${i} `)
       let conf = window.confirm('Deseja jogar novamente?')
            if(conf == true)
            {
                num = (Math.floor(Math.random() * 20) + 1)
                i = (i-i) + 1
            }
            else break
    }
    else if(resp2 < num)
    {
        window.alert('Numero muito baixo!,tente novamente')
    }
    else window.alert('Numero muito alto! tente novamente')
}