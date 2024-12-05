const leia = require('readline-sync');

//Declarei as variaveis
let letraA, letraB, letraC;
//Pedi para o usuario digitar o numero conforme as letras
letraA = leia.questionInt('"Digite o numero A:');
letraB = leia.questionInt('Digite o numero B:');
letraC = leia.questionInt('Digite o numero C:');

//Aqui uma conta basica, se A + B for maior que C, retornar o valor abaixo 
if (letraA + letraB > letraC) {
    console.log("A Soma de A + B é Maior do que C");
} else if (letraA + letraB < letraC) {
    //Se a soma de A + B for menor do que a C retornar o valor abaixo
    console.log("A Soma de A + B é Menor do que C ");
} else {
    console.log("A Soma de A + B é igual a C");
}
//E por ultimo se o valor for igual ao C, retorna igual
