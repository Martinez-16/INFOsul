let preco = [3.80, 6.50, 9.75, 1.99, 5.48, 3.98, 2.34]

        preco.splice(3, 3, '7.80')
    for(let a=0 ; a < preco.length ; a++)
    {
        let desc = preco[a]*0.15
        let precof = preco[a] - desc
        console.info("preço normal: " + preco[a] + "\n" + "preço com desconto: " + precof.toFixed(2))
        
    }