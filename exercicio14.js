const prompt = require('prompt-sync')();

// recebe o numero a ser feito o cauculo fatorial
let numero = Number(prompt ("Qual numero deseja saber a fatorial? "));

let fatorial = 1;

// faz o loop pra fazer a contagem e caucular o fatorial
for(let i = 1; i <= numero; i++) {
   
   fatorial *=i;
    
}

console.log(fatorial);