// DESAFIO 7 - Par ou Ímpar
// Peça um número ao usuário.
// Diga se é "Par" ou "Ímpar".
// DICA: use o operador % (resto da divisão). Se numero % 2 === 0, é par.

let numero = parseInt(prompt("Digite um número:"));

// Escreva seu código aqui:

if (isNaN(numero % 2 === 0)) {
    alert("Número é par")
} else {
    alert("Número é impar")
}