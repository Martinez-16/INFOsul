let login = document.getElementById("login");
let senha = document.getElementById("senha");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function() {
         if (login.value == "" || senha.value == "") {
            alert("Os campos de login ou senha está vazio!");
            return;
        
         }
         if (login.value == "usuario" && senha.value == "12345"){

            alert("Usuario logado!")
         } 
         else alert("Usuario ou senha invalidos!")
});