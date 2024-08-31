const prompt = require('prompt-sync')();   
// todas as variaveis iniciadas
let numero = true;
let media = 0;
let contador = -1;
let soma = 0;

// esse exercicio eu sofri um pouco mas eu consegui fazer
// verifica a entrada de numeros ate ser digitado 0
while (numero !== 0) {
    numero = Number(prompt ("digite um valor(Ate que seja digitado o 0): "));   
    contador ++;
    soma += numero;

// aq ele caucula a media 
    media = soma/contador;
}
    
console.log(media.toFixed(2));

