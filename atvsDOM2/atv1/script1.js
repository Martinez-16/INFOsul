let botao1 = document.getElementById("bt1");
let botao2 = document.getElementById("bt2");
let botao3 = document.getElementById("bt3");
let botao4 = document.getElementById("bt4");

botao1.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

botao2.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

botao3.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

botao4.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});