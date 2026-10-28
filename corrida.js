// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;
// let km  = "8";    //ESSE COMANDO É O CRTL + D = COMENTA VARIAS LINHAS COM O MESMO  //CRTL + F LOCALIZAR E ALTERAR 
// let minutos = 20;




let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;
console.log("R$: ", total.toFixed(2))
console.log(typeof tarifaBase)

//alterar o km por 15 continuou o codigo ok

const tarifaBase = 5;
const precoPorMinuto = 0.5;
const precoPorKm = 2;
let km  = "3";  
let minutos = 20;


console.log("R$: ", total.toFixed(2))
console.log(typeof tarifaBase)
//tarifaBase = 6; // const não pode ser alterado valor no mesmo codigo
//alterando o valor do minuto para 45 e o km para 3= valor deu 33.50
console.log(typeof precoPorKm) 
console.log(typeof precoPorMinuto)
console.log(typeof tarifaBase)
 //erro ao tentar selecionar o let km - somente o KM, não entra a ferramenta LET ou CONST
console.log(typeof km)
// $ npm install prompt-sync -- o $ não é reconhecido no código

const prompt = require("prompt-sync")();

km = prompt("Quantos km?")// erro encontrado, km não declarado
//segundo erro, prompt sem aspas não estava sendo lido como stringe(texto)
console.log(km * 2)
console.log(km + 5)
console.log(typeof km)

