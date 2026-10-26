
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
let hora = Number(prompt("Qual o valor do pix?"))
let limite = 5000;

if (hora >=20){
    limite=1000
}



if (saldo >= valor) {
    saldo = saldo - valor;
    console.log("Pix enviado  R$: "  + saldo.toFixed(2)) 
} else {
    console.log("Pix bloqueado" + "Saldo Insuficiente");
}

 

if(valor > limite){
    console.log("Pix bloqueado" + "Limite Noturno atingido")
}

 if (saldo >= valor + hora){

 }
    console.log("Pix enviado R$:" + saldo.toFixed(2))
