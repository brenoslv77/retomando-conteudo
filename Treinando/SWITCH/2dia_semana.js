// DESAFIO 10 - Dia da Semana
// Peça um número de 1 a 7 ao usuário.
// Mostre o dia da semana correspondente:
// 1 = Domingo, 2 = Segunda, 3 = Terça, 4 = Quarta, 5 = Quinta, 6 = Sexta, 7 = Sábado
// Se digitar outro número, mostre "Número inválido"
// DICA: use switch com cases para cada número

let dia = parseInt(prompt("Digite um número de 1 a 7:"));

// Escreva seu código aqui:

switch (dia) {
    case 1:
        alert("Domingo");
        break;

    case 2:
        alert("Segunda");
        break;

    case 3:
        alert("Terça");
        break;

    case 4:
        alert("Quarta");
        break;

    case 5:
        alert("Quinta");
        break;

    case 6:
        alert("Sexta");
        break;

    case 7:
        alert("Sábado");
        break;

    default:
        alert("Número inválido");
}