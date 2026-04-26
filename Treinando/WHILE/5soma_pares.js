// DESAFIO 11 - Soma de Pares
// Peça números ao usuário até ele digitar 0.
// Some APENAS os números PARES.
// Mostre a soma dos pares no final.
// DICA: dentro do while, use if (numero % 2 === 0) para verificar se é par

let numero = parseInt(prompt("Digite um número (0 para parar):"));
let somaPares = 0;

// Escreva seu código aqui:

while (numero != 0) {
    if (numero % 2 === 0) {
   somaPares += numero;
    }
    numero = parseInt(prompt("Digite outro número (0 para parar):"));
    }
    
alert("Soma dos pares: " + somaPares);