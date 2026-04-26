// DESAFIO 11 - Estação do Ano
// Peça um número de 1 a 4 ao usuário.
// Mostre a estação do ano correspondente:
// 1 = Verão, 2 = Outono, 3 = Inverno, 4 = Primavera
// Se digitar outro número, mostre "Estação inválida"
// DICA: use switch

let estacao = parseInt(prompt("Digite um número de 1 a 4:"));

// Escreva seu código aqui:


switch (estacao) {
    case 1:
        alert("Verão");
        break;

    case 2:
        alert("Outono");
        break;

    case 3:
        alert("Inverno");
        break;

    case 4:
        alert("Primavera");
        break;

    default:
        alert("Estação inválida");
}