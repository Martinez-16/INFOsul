let botao = document.getElementById("bt1");
let paragrafo = document.getElementsByTagName("p")[0];
botao.addEventListener("click", function() {
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
});