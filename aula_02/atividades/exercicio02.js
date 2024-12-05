const leia = require('readline-sync')

//defini as variaveis
let nota1, nota2, nota3, nota4;
let mediaFinal;

nota1 = leia.questionFloat("\nDigite a primeira nota: ");
nota2 = leia.questionFloat("\nDigite a segunda nota: ");
nota3 = leia.questionFloat("\nDigite a terceira nota: ");
nota4 = leia.questionFloat("\nDigite a quarta nota: ");

mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

console.log("Sua média final é: ", mediaFinal.toFixed(1))