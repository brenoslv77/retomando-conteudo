// DESAFIO 8 - Positivo, Negativo ou Zero
// Peça um número ao usuário.
// Diga se é "Positivo", "Negativo" ou "Zero".
// DICA: use if, else if e else

let numero = parseFloat(prompt("Digite um número:"));

// Escreva seu código aqui:

if (isNaN(numero)) {
    alert("Valor inválido");
} else if (numero > 0) {
    alert("Número positivo");
} else if (numero < 0) {
    alert("Número negativo");
} else {
    alert("Número é zero");
}