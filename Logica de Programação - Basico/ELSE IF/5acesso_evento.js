// DESAFIO 5 - Acesso ao Evento
// Peça a idade e se tem convite (sim/não).
// Entrada permitida se: idade >= 18 OU convite for "sim".
// DICA: use || (OU lógico)

let idade = parseInt(prompt("Qual sua idade?"));
let temConvite = prompt("Tem convite? (sim/não)");

// Escreva seu código aqui:

if (idade >= 18 || temConvite === "sim") {
    alert("Permitido")
} else {
    alert("Não Permitido")
}