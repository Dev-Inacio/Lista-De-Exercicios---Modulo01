const prompt = require('prompt-sync')();

// recebe a nota.
let nota = Number(prompt ('Qual Sua nota??: '));

// faz a verificação da nota.
if (nota >= 6) {
    console.log("Parabens Você Foi APROVADO: ");
} else if (nota == 5) {
    console.log("Recuperação: ");
} else {
    console.log("REPROVADO!: ");
}