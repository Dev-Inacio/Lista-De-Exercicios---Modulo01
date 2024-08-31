const prompt = require('prompt-sync')();

// lendo o valor 
let n1 = Number(prompt ("Digite um valor para ser repetido 10 vezes: "));

// loop para fazer a repetiçao do numero
for(let i = 1; i <= 10; i++){
    console.log(n1);
}