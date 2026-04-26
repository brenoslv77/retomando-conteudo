// DESAFIO 3 - Calculadora de Desconto
// Peça o valor da compra. Se for >= 100, dê 10% de desconto. Senão, não dê desconto.
// Mostre o valor final.
// DICA: valor * 0.9 para 10% de desconto

let valor = parseFloat(prompt("Digite o valor da compra:"));

// Escreva seu código aqui:

if (valor >= 100) {
    let valorFinal = valor * 0.9;
    alert("Você recebeu 10% de desconto! Valor final: R$ " + valorFinal);
} else {
    alert("Sem desconto. Valor final: R$ " + valor);
}
