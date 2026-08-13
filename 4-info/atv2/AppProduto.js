import Produto from "./produto.js"

let produto1 = new Produto("TesticuloDeMacaco", "Balls-Utilities", 69.90, 42)
let produto2 = new Produto("Essencia-Testicular", "Balls-Utilities", 67.90, 67 )

console.info(produto1.nome)
console.info(produto1.marca)
console.info(produto1.preco)
console.info(produto1.quantidade)
console.info(produto2.nome)
console.info(produto2.marca)
console.info(produto2.preco)
console.info(produto2.quantidade)


produto1.vender(6)
produto2.vender(7)

console.log("Quantia restante de Testiculo De Macaco: ", produto1.quantidade)
console.log("Quantia restante de Essencia-Testicular: ", produto2.quantidade)
