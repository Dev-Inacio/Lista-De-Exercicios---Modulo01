// inicializando as variaveis
let a = 1;
let b = 1;


// fazendo o loop
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let temp =a;

    a = b;
    b = temp + b
}