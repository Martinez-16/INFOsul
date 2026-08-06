var nomes = "Carlos, Ana, Marcos, Joana, Luis, Paulo"
if(nomes.indexOf("Maria") >= 0){
    console.log("Existe o nome Maria")
}else{
    console.log("Não existe o nome Maria")
}
console.log(nomes.substr(nomes.indexOf("Luis"),4))                                                  