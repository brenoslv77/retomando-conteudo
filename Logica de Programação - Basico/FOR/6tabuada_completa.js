// DESAFIO 6 FOR - Tabuada completa
// Peça um número.
// Mostre tabuada de 1 a 10 usando 2 FORs
let numero = parseInt(prompt("Qual tabuada mostrar?"));
// Exemplo: 3 → 3x1=3, 3x2=6...
let resultado = 0
for (let i = 1; i <= numero; i++) {
    for (let j = 1; i <= j; j++) {
        resultado = i * j
    alert(i + " x " + j + " = " + resultado);
    }
}

// esse eu fiz com ajuda do chat, mas consegui entender a logica.