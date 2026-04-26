// DESAFIO 2 - Login e Senha
// Peça login e senha. Só permita acesso se login for "admin" E senha for "1234".
// Se corretos: "Acesso permitido". Se errados: "Acesso negado".
// DICA: use && (E lógico)

let login = prompt("Digite o login:");
let senha = prompt("Digite a senha:");

// Escreva seu código aqui:

if (login === "admin" && senha === "1234") {
    alert("Acesso permitido");
} else {
    alert("Acesso negado");
}
