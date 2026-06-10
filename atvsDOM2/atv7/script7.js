const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");
const textArea    = document.getElementById("textArea");

function buscarPalavra() {
  const palavra = searchInput.value.trim();
  const texto   = textArea.value;

  if (!palavra) {
    alert("Por favor, digite uma palavra para pesquisar.");
    searchInput.focus();
    return;
  }

  if (!texto.trim()) {
    alert("A área de texto está vazia. Insira um texto antes de pesquisar.");
    textArea.focus();
    return;
  }

  const regex      = new RegExp(`\\b${escaparRegex(palavra)}\\b`, "gi");
  const ocorrencias = texto.match(regex);
  const total      = ocorrencias ? ocorrencias.length : 0;

  if (total > 0) {
    alert(`Palavra: "${palavra}"\nOcorrências encontradas: ${total}`);
  } else {
    alert(`A palavra "${palavra}" não foi encontrada no texto.`);
  }
}

function escaparRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

searchBtn.addEventListener("click", buscarPalavra);

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") buscarPalavra();
});
