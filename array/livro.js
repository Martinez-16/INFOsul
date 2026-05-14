let livros = [
  "Java como programar",
  "C completo e total",
  "JavaScript para leigos",
  "Aprendendo HTML",
  "Desmistificando a Web",
  "Core Java"
];

let contadorJava = 0;

for (let i = 0; i < livros.length; i++) {
  if (livros[i].toLowerCase().includes("java")) {
    contadorJava++;
  }
}

console.log("Quantidade de livros sobre Java:", contadorJava);

console.log("Títulos em maiúsculas:");

for (let i = 0; i < livros.length; i++) {
  console.log(livros[i].toUpperCase());
}

let livroHTML = "";

for (let i = 0; i < livros.length; i++) {
  if (livros[i].toLowerCase().includes("html")) {
    livroHTML = livros[i];
  }
}

console.log("Livro sobre HTML:", livroHTML);