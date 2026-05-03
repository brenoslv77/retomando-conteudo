// DESAFIO 3 - Números Primos
// Peça um número ao usuário.
// Diga se é primo ou não.
// DICA: número é primo se só for divisível por 1 e por ele mesmo.
// Use for para testar divisores de 2 até n-1

let n = parseInt(prompt("Digite um número:"));

// Escreva seu código aqui

let v = 0;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        v += i;
    }
}

if (v === 0 && n > 1) {
    alert("Número é primo");
} else {
    alert("Número não é primo");
}