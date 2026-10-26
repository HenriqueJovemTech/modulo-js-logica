
//     let saldo = 150;
// let valor = 150;

// if (saldo >= valor) {
//     console.log("pix enviado. Saldo: R$", saldo.toFixed(2));
//  } else
//         console.log("Saldo insuficiente");

// let saldo = Number(prompt) ("Qual o valor atual da conta)");
// console.log("Pix enviado");

const prompt = require("prompt-sync")();
let saldo = Number(prompt("Qual o saldo?"))
let valor = Number(prompt("Qual o valor do pix?"))

if (saldo >= valor) {
    saldo = saldo - valor;
    console.log("Pix enviado  R$: "  + saldo.toFixed(2)) 
} else {
    console.log("Pix bloqueado" + "Saldo Insuficiente");
}

 