const nomes= "Carlos, Ana, Marcos, Joana, Luis, Paulo"

    if(nomes.indexOf("maria") >=0){
        console.log("tem o nome maria")
    }
    else{
        console.log("nao tem maria")
    }
        console.log(nomes.substr(nomes.indexOf("Luis"),4))