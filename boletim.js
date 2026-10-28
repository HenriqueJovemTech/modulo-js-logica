// // // const aluno1 = "Henrique";
// // // const media1 = 8;
// // // if(media1 >=7){
// // //     console.log("Aprovado")

// // // } else{
// // //     console.log("Reprovado")
// // // }
// // // const aluno2 = "João";
// // // const media2 = 9;
// // // if(media2 >=7){
// // //     console.log("Aprovado")

// // // } else{
// // //     console.log("Reprovado")
// // // }

// // // const aluno3 = "Maria";
// // // const media3 = 5;
// // // if(media3 >=7){
// // //     console.log("Aprovado")

// // // } else{
// // //     console.log("Reprovado")
// // // }
// // // const aluno4 = "Julia";
// // // const media4 = 5;
// // // if(media4 >=7){
// // //     console.log("Aprovado")

// // // } else{
// // //     console.log("Reprovado")
// // // }
// // // const aluno5 = "Lucas";
// // // const media5 = 10;
// // // if(media5 >=7){
// // //     console.log("Aprovado")

// // // } else{
// // //     console.log("Reprovado")
// // // }
// // // const aluno6 = "Alice";
// // // const media6 = 10;
// // // if(media6 >=7){
// // //     console.log("Aprovado")

// // // } else{
// // //     console.log("Reprovado")
// // // }

// // const alunos = [
// //     { nome: "Henrique", media: 7 },
// //     { nome: "Gyo", media: 8 },
// //     { nome: "Alice", media: 10 },
// //     { nome: "Lucas", media: 9 },
// //     { nome: "Henry", media: 6 },
// //     { nome: "Maria", media: 5 },
// // ]
// // for (const aluno of alunos) {
// //     if (aluno.media >= 7) {
// //         console.log("APROVADO}");
// //     } else {
// //         console.log('REPROVADO');
// //     }
// // }





const medias = [ 8.5, 6, 5, 9.2, 4, 8]
const nomes = ["Henrique", "Paulo","Lancaster","Ilgner", "Heitor","Ely"]

console.log("Aluno : " + nomes[3] + " Media : " + medias[3])



for (let i = 0; i < medias.length; i++) {
  if (medias[i] >= 7){
 console.log(nomes[i] + " Aprovado ")

  } else{
    console.log(nomes[i] + " Reprovado ")
}

};