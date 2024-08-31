const prompt = require('prompt-sync')();
let soma = 0;

// loop com 5 repetições
for(i = 1; i <= 5; i++) {

// lendo os 5 valores
let n1 = Number(prompt ("Digite o valor a ser cauculado: "));
// somandos os valores digitados
soma += n1;
}
// resultado
console.log(`o resultado da soma de todos os numeros digitados: ${soma}`);




