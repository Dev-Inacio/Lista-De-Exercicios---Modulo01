const prompt = require('prompt-sync')();

// recebe o numero a ser feito a tabuada
let tabuada = Number(prompt ("qual numero deseja ver a tabuada?: "));
let calc = 1;
// so pra pular linha
console.log();

// uma mensagem so pra brincar
console.log(`Cauculadora do numero ${tabuada}: `);

// loop fazendo a tabuada
for(i = 1; i <= 10; i++) {

    // cauculo legal
    calc = tabuada *i;    

    
    console.log(`${tabuada} X ${i} = ${calc} `);   

}



