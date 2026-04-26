// DESAFIO 9 - Categoria de Idade
// Peça a idade da pessoa.
// 0 a 12 anos: "Criança"
// 13 a 17 anos: "Adolescente"
// 18 a 59 anos: "Adulto"
// 60 anos ou mais: "Idoso"
// DICA: use if, else if encadeados

let idade = parseInt(prompt("Digite sua idade:"));

// Escreva seu código aqui:

if (isNaN(idade) || idade < 0) { 
    alert("Número invalido")
} else if (idade <= 12) {
    alert("Criança")
} else if (idade <= 17) {
    alert("Adolescente")
} else if (idade <= 59) {
    alert("Adulto")
} else {
    alert("Idoso")
}