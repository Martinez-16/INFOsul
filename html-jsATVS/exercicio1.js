let nome = window.prompt('O nome do produto? ')
let preço = window.prompt('Qual o preço desse produto?')
let qnt = window.prompt('quantas unidades deseja comprar desse produto?')
let preco2 = parseFloat(preço)
let qnt2 = parseInt(qnt)
let bruto = (qnt2 * preco2)


let conf = window.confirm(`O valor total é de ${bruto} ,possui cupom de desconto?`)
    if(conf == true)
    {
        let cpm = window.prompt('Qual o codigo do cupom?')
            if(cpm == "DEZ10")
            {
                window.alert(`Produto:${nome}   Preço Final:${((bruto) - (bruto*0.10)).toFixed(2)}`)
            }
            else window.alert("Cupom Invalido!")
                 window.alert(`Produto:${nome}   Preço Final:${bruto.toFixed(2)}`)
    }
    else window.alert(`Produto:${nome}   Preço Final:${bruto.toFixed(2)}`)