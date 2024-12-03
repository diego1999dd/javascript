const leia = require('readline-sync')

//defini as variaveis
let n1, n2, n3, n4;
let calculo

//coloquei para o usuario digitar os numeros e coloquei como questionFloat para os numeros
n1 = leia.questionFloat("\nDigite o primeiro numero: ");
n2 = leia.questionFloat("\nDigite o segundo numero: ");
n3 = leia.questionFloat("\nDigite o terceiro numero: ");
n4 = leia.questionFloat("\nDigite o quarto numero: ");

//calculo final
calculo = (n1 * n2) - (n3 * n4)

console.log("\nO Calculo final é: ", calculo);
