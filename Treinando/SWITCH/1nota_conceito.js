// DESAFIO 9 - Conversor de Nota para Conceito
// Peça uma nota de 0 a 10 e converta para conceito:
// 9 a 10 = A
// 7 a 8.9 = B
// 5 a 6.9 = C
// 3 a 4.9 = D
// 0 a 2.9 = E
// Use switch(true) com cases assim: case (nota >= 9):

let nota = parseFloat(prompt("Digite a nota (0 a 10):"));

switch (true) {
    case (nota >= 9):
        alert("Conceito: A");
        break;
    case (nota >= 7):
        alert("Conceito: B");
        break;
    case (nota >= 5):
        alert("Conceito: C");
        break;
    case (nota >= 3):
        alert("Conceito: D");
        break;
    default:
        alert("Conceito: E");
}

