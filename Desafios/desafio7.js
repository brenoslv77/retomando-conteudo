// DESAFIO 7 - Soma até Zero
// Peça números ao usuário e some todos eles.
// Pare quando o usuário digitar 0.
// Mostre a soma total no final.
// DICA: use while (condicao)

let soma = 0;
let numero = parseFloat(prompt("Digite um número (0 para parar):"));

// Escreva seu código aqui:

while (numero !== 0) {
    soma += numero;
    numero = parseFloat(prompt("Digite um novo número (0 para parar):"));
}
alert("Soma total: " + soma);

