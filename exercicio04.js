const prompt = require('prompt-sync')();

console.log("Menu De Opções: ");
console.log("Opção: 1 ");
console.log("Opção: 2 ");
console.log("Opção: 3 ");
console.log();

// o usuario escolhe alguma das opções.
let op = Number(prompt ('Digite Uma Opção: '));

switch (op) {
    case 1:
        console.log("Você Escolheu A Opção: 1");
        break;
    case 2:
        console.log("Você Escolheu A Opção: 2 ");
        break;
    case 3:
        console.log("Você Escolheu A Opção: 3");
        break;    
}