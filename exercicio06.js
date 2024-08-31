const prompt = require('prompt-sync')();

// recebe a nota.
let ladoA = Number(prompt ("Digite o Primeiro lado do triangulo: "));
let ladoB = Number(prompt ("Digite o Segundo lado do triangulo: "));
let ladoC = Number(prompt ("Digite o Terceiro lado do triangulo: "));

// verifica se os valores são triangulo.
if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
// Verifica o tipo de triângulo.
    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        console.log( "Triângulo equilátero");
    } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo")
}



