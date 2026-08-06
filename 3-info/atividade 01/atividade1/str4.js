import input from 'readline-sync'


    msg = input.question('Palavra:' )
    msg1 = ""
    for(var i = 0 ; i < msg.length ; i++ )
    {
        if(msg.charAt(i) == "a")
            msg1 = msg1 + "@"

        else if(msg.charAt(i) == "o")
            msg1 = msg1 + "!"

        else if(msg.charAt(i) == "d")
            msg1 = msg1 + "#"

        else if(msg.charAt(i) == "e")
            msg1 = msg1 + "&"

        else if(msg.charAt(i) == "u")
            msg1 = msg1 + "^"

        else if(msg.charAt(i) == "c")
            msg1 = msg1 + "*"

        else if(msg.charAt(i) == "i")
            msg1 = msg1 + "?"

        else if(msg.charAt(i) == "s")
            msg1 = msg1 + "%"

        else if(msg.charAt(i) == "m")
            msg1 = msg1 + "!" 

    }

        console.log("mensagem original : ", msg)
        console.log("mensagem codificada : ", msg1 )