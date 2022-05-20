//------------ Exercício 1 -----------------
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log('Bem vinda, ', info.personagem);
//------------------------------------------
//------------ Exercício 2 -----------------
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// //   info['recorrente'] = 'Sim';
// info.recorrente = 'Sim';
//   console.log(info);
//------------------------------------------
//------------ Exercício 3 -----------------
// let info = {
//         personagem: 'Margarida',
//         origem: 'Pato Donald',
//         nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//       };
//     //   info['recorrente'] = 'Sim';
//     info.recorrente = 'Sim';
//     for (let i in info) {
//         console.log(i);
//     }
//------------------------------------------
//------------ Exercício 4 -----------------
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// //   info['recorrente'] = 'Sim';
// info.recorrente = 'Sim';
// for (let i in info) {
//     console.log(info[i]);
// }
//------------------------------------------
//------------ Exercício 5 -----------------
//Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
*/
//------------------------------------------
//------------ Exercício 6 -----------------
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
// console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + "'" + leitor.livrosFavoritos[0]['titulo'] + "'");

//   "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

//------------------------------------------
//------------ Exercício 7 -----------------

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   leitor.livrosFavoritos.push(
//       {
//           titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//           autor: 'JK Rowling',
//           editora: 'Rocco',
//         }
//     )
// console.log(leitor.livrosFavoritos);
    
//------------------------------------------
//------------ Exercício 8 -----------------

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos.push(
      {
          titulo: 'Harry Potter e o Prisioneiro de Azkaban',
          autor: 'JK Rowling',
          editora: 'Rocco',
        }
    )
console.log('"' + leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos' + '"');

//"Julia tem 2 livros favoritos".

//------------------------------------------
