// DESAFIO 10 - Função de Média
// Crie uma função chamada calcularMedia(n1, n2, n3) que retorna a média de 3 notas.
// Peça as 3 notas ao usuário, chame a função e mostre o resultado.
// DICA: function nome(parametros) { return ... }

// Escreva sua função aqui:
let calcularMedia = (n1, n2, n3) => {
  return (n1 + n2 + n3) / 3;
};
// Depois peça as notas e use a função:

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));

let media = calcularMedia(n1, n2, n3);
alert("A média das notas é: " + media);
