// const lista = [1, 2,3,4,];

// console.log(lista);
// console.log(lista[0]);
// console.log(lista[1]);
// console.log(lista[2]);
// console.log(lista[3]);
// console.log(lista[4]);
// console.log(lista[5]);


// console.log(lista.length)
// lista.push(22)
// console.log(lista)

// lista.pop()
// console.log(lista)

// lista.splice(1,2,6,7)

// console.log(lista)

// Objetos chaves com valores.

// let pessoa = {
//     nome: "Jão",
//     idade: 25
// };

// console.log(pessoa)

// const pesso_null = {};

// pesso_null.nome = "Birulei";
// pesso_null.sexo = "Não binare";
// pesso_null.idade = "25"

// console.log(pesso_null)

const Eu = {};

Eu.nome = 'Mateus';
Eu.idade = 25;

Eu['hobbies'] = ['estudo', 'cafe','dormir'];
Eu['profissao'] = 'Engenheiro'

Eu.acao = function () {
    console.log(Eu.hobbies[1])
};
console.log(Eu)

Eu.acao()

for (let i = 0; i <= 10; i++) {
    console.log(i);
    // if (i == 5) {
    //     console.log('uhuu!');
    //     break;
    // }
}

let tam = 0;
while ( tam < 2) {
    console.log("Birulei!!");
    tam++;
}

tam = 0;
do {
    console.log("Uhuuuu!!!");
    tam++;
} while (tam < 5);


const n = [0, 1, 2,3, 4];
console.log(n)


console.log("Percorrendo array com for");
for(let i=0; i < n.length; i++) {
    console.log(n[i]);
}