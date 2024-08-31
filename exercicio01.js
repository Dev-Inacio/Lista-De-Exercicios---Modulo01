const prompt = require('prompt-sync')();

// recebe o numero.
let numero = Number(prompt ('Digite Um Numero: '));

// verifica se o numero é par ou impar.
if (numero %2 === 0) {
    console.log(`O numero ${numero} é PAR: `);
} else {
    console.log(`O numero ${numero} é IMPAR: `);
}