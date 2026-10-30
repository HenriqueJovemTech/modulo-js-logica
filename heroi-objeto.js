// ===== HERÓI =====
//let nome = prompt("Henrique*Pescador");
//let vida = 100;
//let veneno = 0;            // quantos passos o veneno ainda dura
//const inventario = [];
//console.log("");
//console.log(nome + ", jogue a lança no rio para pescar");

const heroi = {
    nome: "SGT Pincel",
    dano: 3,
    vida: 10,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: [],
    sorte:Math.random(),
    esquiva:0.2
}

const aranha ={

    nome: "Spider",
    vida: 10,
    dano:2,
    chanceVeneno:0.4,
    veneno: 3,
    
}

// console.log(heroi.vida)
// //heroi = 15 erro de constante sendo mudada (TypeError: Assignment to constant variable.)
// console.log(heroi.vida)

// console.log(heroi.inventario);
// heroi.inventario.push(heroi.nome  +  " recebeu o item Revolver.38 "  +  heroi.inventario)  //Adicionando item ao inventario com **Push

// // console.log(heroi.inventario)

function tomarDano(heroi, inimigo){
heroi.vida = heroi.vida - inimigo.dano
let chance = Math.random()

console.log("Deu sorte")
}
if(heroi.vida <= inimigo.chance){
    heroi.veneno = inimigo.veneno
    console.log("A aranha de injeta o veneno")
else if (chance <= chance) {
    heroi.veneno = inimigo.chanceVeneno

if(heroi.vida <= inimigo.chance){
    heroi.veneno = inimigo.veneno
    console.log("A aranha de injeta o veneno")

}
// tomarDano(heroi)
// console.log("teste")