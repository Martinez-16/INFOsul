import input from 'readline-sync'
let b=0
let filmes = ["", "", "", "", ""]
for(let a=0 ; a < filmes.length ; a++)
{
    filmes[a] = input.question(`filme ${a + 1}: ${filmes[a]}`)

}
console.info("\n" + "___________________________________" + "\n")
while(b<filmes.length)
{
    if(filmes[b].length < 20)
        {
            console.log(filmes[b] + ':' + " esse titulo possui menos de 20 caracteres" + "\n")
            
        }
        else console.log(filmes[b] + ':' + " esse titulo possui mais de 20 caracteres" + "\n")
        b++

}
console.log("terceiro filme da lista: " + filmes[2] )