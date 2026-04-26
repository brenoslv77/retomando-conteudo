// DESAFIO 8 - Jogo da Adivinhação
// O computador "pensa" em um número de 1 a 10 (use: let secreto = Math.floor(Math.random() * 10) + 1)
// O usuário tenta adivinhar. Dê dicas: "maior" ou "menor".
// Conte quantas tentativas até acertar.
// DICA: use while para repetir até acertar

let secreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let chute = parseInt(prompt("Adivinhe o número (1 a 10):"));

// Escreva seu código aqui:

while (chute !== secreto) {
    tentativas++
    if (chute < secreto) {
        alert("Maior")
    } else {
        alert("Menor")
    }
    chute = parseInt(prompt("Tente novamente"));
}

tentativas++;
alert("Acertou em " + tentativas + " tentativas!");
