// DESAFIO 12 - Maior Número da Lista
// Peça 5 números ao usuário e guarde em um array.
// Crie uma função chamada encontrarMaior(numeros) que recebe o array e retorna o maior valor.
// Mostre o maior número.
// DICA: use um loop for para percorrer o array


// Peça os 5 números:
let numeros = [];
let Nuser1 = prompt("Digite o primeiro número:");
numeros.push(parseFloat(Nuser1));
let Nuser2 = prompt("Digite o segundo número:");
numeros.push(parseFloat(Nuser2));
let Nuser3 = prompt("Digite o terceiro número:");
numeros.push(parseFloat(Nuser3));
let Nuser4 = prompt("Digite o quarto número:");
numeros.push(parseFloat(Nuser4));
let Nuser5 = prompt("Digite o quinto número:");
numeros.push(parseFloat(Nuser5));
// Crie a função aqui:
let encontrarMaior = (numeros) => {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
};
// Chame a função e mostre o resultado:
alert("O maior número é: " + encontrarMaior(numeros));
