let funcionario = [
    {
      nome: 'Euclides',
      idade: 21,
      cargo: 'Analista de sistemas',
      tecnologia: 'Node',
    },
    {
      nome: 'Linton',
      idade: 30,
      cargo: 'Analista de sistemas',
      tecnologia: 'Tudo',
    },
    {
        nome: 'Livia',
        idade: 30,
        cargo: 'Analista de sistemas II',
        tecnologia: 'Tudo',
      },
  ];


//   console.log(funcionario)

  funcionario.push({
    nome:'Richadir',
    idade: 27,
    cargo: 'Aluno',
    tecnologia: "Android"
  })


//   funcionario.map((resposta) => {   
//     if(resposta.nome === 'Linton') {
//         console.log(resposta)
//     }
//   });

//   for(let i=0; i<funcionario.length; i++) {
//     if(funcionario[i].nome == 'Linton') {
//         console.log(funcionario[i])
//     }
//   };

//   const valor = funcionario.filter((resposta) => {
//     return resposta.nome === 'Livia'
//   });

//   console.log(valor)




//   substitui tecnologia  por um array []
// ====================================================================================
console.log(funcionario)


// Converte o tipo para array de todos os funcionarios
funcionario.map((resposta) => {   
    resposta.tecnologia = resposta.tecnologia.split();
  });

//Push nas habilidades de funcionarios especifico
funcionario.map((resposta) => {   
    if(resposta.nome === 'Euclides') {
        resposta.tecnologia.push('Angular', 'Android');
    }
  });

// funcionario.map((resposta) => {   
//     resposta.tecnologia = [resposta.tecnologia];
// });

console.log('\n\n Atualizado')
console.log(funcionario)
// ========================================================================================