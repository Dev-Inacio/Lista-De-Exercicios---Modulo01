const prompt = require('prompt-sync')();

// leitura dos valores
let valor1 = Number(prompt ("Digite o Primeiro valor: "));
let valor2 = Number(prompt ("Digite o segundo valor: "));
let contador = valor1;

// condicional para verificar se os valores sao diferentes
if (valor1 !== valor2) {
    // loop para contar do valor1 ate o valor2
    for (let i = valor1; i < valor2; i++){        
        contador ++
        console.log(contador);       
    }    
} else {

    console.log("Valores Repetidos!!!!!!!");
}

