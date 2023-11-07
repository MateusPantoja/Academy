// function saudacao() {
//     console.log("Olá, seja bem vindo !!");
// }

// saudacao();


// paramentos
 
// function saudar(nome) {
//     console.log("Ola, " + nome + "!!");
// }

// saudar("Mateus");
// saudar("Pantoja")

// const funcao = function (valor) {
//     console.log(valor);
// }

// funcao('teste');


// Funcao callback
// espera como parametro a chama de outra funcao

// function fc1(){
//     console.log("Ola callback fuction");
// };

// function callbackFuncao (funcao) {

//    console.log("Ola mundo")
// };

// callbackFuncao(fc1());


const teste = (a) => a + 10;
const calIdade = (anoNasc) => {
    const idade = 2023 - anoNasc;
    const nome = 'Mateus';
    return {
        idade,
        nome,
    };
}

// console.log(teste(10))
// console.log(calIdade(1997))



let array = [
    {
        id: 1,
        name: 'Jhon',
        age: 23,
    },
    {
        id: 2, 
        name: 'Xamuel',
        age: 24,
    },
    {
        id: 3,
        name: 'Birulei',
        age: 10,
    },
    {
        id: 4,
        name: 'Hann',
        age: 45,
    },

];

// const resultado = array.map((resposta) => {
//    if(resposta.name == 'Jhon') {
//     resposta.idade = resposta.age + 10;
//    }
//    console.log(resposta)
//     return '';
// })

const filtro = array.filter((resposta) => {
    return resposta.id === 2;
});

console.log(filtro);

const someFuncao = array.some((resposta) => {
    resposta.id == 1;
});

console.log(someFuncao)