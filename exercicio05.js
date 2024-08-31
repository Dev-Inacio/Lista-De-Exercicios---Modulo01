const prompt = require('prompt-sync')();

// recebe o peso e altura.
let peso = Number(prompt ('Digite O Seu Peso Corporal: '));
let altura = Number(prompt ('Digite A Sua Altura: '));

// Cauculo do imc
let imc = peso / (altura * altura);

// condicinal para todos os niveis de imc
if (imc < 18.5) {
console.log(`O resultado do seu Imc é = ${imc.toFixed(2)}: Estado de: magreza`);
} else if((imc > 18.5) && (imc <= 24.9)) {
    console.log(`O resultado do seu Imc é = ${imc.toFixed(2)}: Estado de: Normal`);
} else if((imc > 24.9) && (imc <= 29.9)) {
    console.log(`O resultado do seu Imc é = ${imc.toFixed(2)}: Estado de: Sobrepeso`);
} else if((imc > 29.9) && (imc <= 39.9)) {
    console.log(`O resultado do seu Imc é = ${imc.toFixed(2)}: Estado de: Obesidade`);
} else if(imc > 40.0) {
    console.log(`O resultado do seu Imc é = ${imc.toFixed(2)}: Estado de: Obesidade Grave`);
}




