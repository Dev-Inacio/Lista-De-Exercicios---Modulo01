const prompt = require('prompt-sync')();

// recebe a idade.
let idade = Number(prompt ('Digite Sua Idade: '));

// faz a verificação da idade.
if ((idade => 0) && (idade <= 12)) {
    console.log("criança");
} else if ((idade => 13) && (idade <= 17)){
    console.log("adolecente");
} else if ((idade => 18) && (idade <= 64)){
    console.log("adulto");
} else if (idade => 65){
    console.log("idoso");
} 

