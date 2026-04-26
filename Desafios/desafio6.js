// DESAFIO 6 - Frete Grátis
// Peça o valor da compra e a distância em km.
// Frete grátis se: compra >= 150 E distância <= 50km.
// Senão, frete custa R$ 20 + R$ 1 por km excedente acima de 50.
// Mostre se tem frete grátis ou o valor do frete.

let compra = parseFloat(prompt("Valor da compra:"));
let distancia = parseFloat(prompt("Distância em km:"));

// Escreva seu código aqui:

if (compra >= 150 && distancia <= 50) {
    alert("Frete grátis disponível!");
} else {
    let excedente = 0;
    if (distancia > 50) {
        excedente = distancia - 50;
    }
    let frete = 20 + excedente;
    alert("Valor do frete: R$ " + frete);
}