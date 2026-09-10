import Avaliacao from "./Avaliacao.js";

let aluno1 = new Avaliacao("João", "Matemática", 8, 7);

console.log(`Aluno: ${aluno1.nome}`);
console.log(`Disciplina: ${aluno1.disciplina}`);
console.log(`Nota 1: ${aluno1.nota1}`);
console.log(`Nota 2: ${aluno1.nota2}`);
console.log(`Média: ${aluno1.calcularMedia()}`);
console.log(`Situação: ${aluno1.calcularSituacaoAluno()}`);