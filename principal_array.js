const readlineSync = require('readline-sync');

let numArray1 = [1, 2, 3, 4, 5];
let numArray2 = [];
let numArray3 = [];

let contador = 0;
let valor = 0;

function soma() {
    for (let i = 0; i < numArray1.length; i++) {
        numArray3[i] = numArray1[i] + numArray2[i]; 
    }
    return numArray3;
}

function ler() {
    while(contador <= 4) {
        valor = Number(readlineSync.question("Digite um valor para ser guardado: "));
        numArray2.push(valor);
        contador += 1;
    }

    return numArray2;
}



console.log('============================================');
console.log("Soma dos valores de 2 arrays ");
console.log('============================================');

let leia = ler();
let resposta = soma();

console.log("O array 2 é = ", leia);
console.log("O array 3 é = ", resposta);



