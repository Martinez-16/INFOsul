function verificarPalindromo() {
            let palavra = document.getElementById("palavra").value.toLowerCase();
            let invertida = "";

            for (let i = palavra.length - 1; i >= 0; i--) {
                invertida += palavra[i];
            }

            if (palavra == invertida) {
                document.getElementById("resultado").innerHTML = "É um palíndromo.";
            } else {
                document.getElementById("resultado").innerHTML = "Não é um palíndromo.";
            }
        }