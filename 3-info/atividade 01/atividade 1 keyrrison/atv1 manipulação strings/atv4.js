
let msg = "Hello,World!"

let codificada = msg
  .replace(/a/g, "@")
  .replace(/o/g, "!")
  .replace(/d/g, "#")
  .replace(/e/g, "&")
  .replace(/u/g, "^")
  .replace(/c/g, "*")
  .replace(/i/g, "?")
  .replace(/s/g, "%")
  .replace(/m/g, "!");

console.log("Frase original:", msg);
console.log("Frase codificada:", codificada);