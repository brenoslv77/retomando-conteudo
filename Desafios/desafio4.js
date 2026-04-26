// DESAFIO 4 - Classificação de Notas
// Peça a nota do aluno (0 a 10).
// Nota >= 9 → "Excelente"
// Nota >= 7 → "Bom"
// Nota >= 5 → "Regular"
// Nota < 5 → "Insuficiente"
// DICA: use if / else if / else

let nota = parseFloat(prompt("Digite a nota (0 a 10):"));

// Escreva seu código aqui:

if (nota >= 9) {
    alert("Excelente")
} else if (nota >= 7) {
    alert("Bom")
} else if (nota >= 5) {
        alert("Regular")
} else {
    alert("Insuficiente")
}
