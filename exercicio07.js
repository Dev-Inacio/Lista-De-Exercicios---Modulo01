const prompt = require('prompt-sync')();

// recebe a quantidade das maças a serem compradas.
let qtd = Number(prompt ("Quantas Maças Você quer comprar? "));
let maças = 0;

// condição para saber o preço da maçãs
if(qtd < 12){
    maças = 0.30;
} else {
    maças = 0.25;
}

// logica para multiplicas as maças
let soma = maças * qtd;

console.log(soma.toFixed(2));