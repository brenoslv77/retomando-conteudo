// WHILE DESAFIO 1 - Soma até negativo
// Soma números até o usuário digitar negativo
// Mostre a soma final

let soma = 0;
let numero = 0;

// Seu código:


while (numero >= 0) {
    numero = parseInt(prompt("Digite qualquer número ('negativo' para parar):"));
    if (numero >= 0) {
        soma += numero;
    }
}
alert(soma);