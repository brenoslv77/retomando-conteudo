// DESAFIO 11 - Lista de Compras
// Crie um array vazio: let lista = []
// Peça 3 itens ao usuário e adicione no array com lista.push(item)
// No final, mostre quantos itens tem e liste todos.
// DICA: lista.length dá a quantidade

let lista = [];
let item1 = prompt("Digite o primeiro item:");
lista.push(item1);
let item2 = prompt("Digite o segundo item:");
lista.push(item2);
let item3 = prompt("Digite o terceiro item:");
lista.push(item3);

// Escreva seu código aqui:
alert("Quantidade de itens na lista: " + lista.length);
alert("Itens na lista:");
for (let i = 0; i < lista.length; i++) {
    alert("- " + lista[i]);
}