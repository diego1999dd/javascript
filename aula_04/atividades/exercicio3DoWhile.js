const leia = require('readline-sync');

// // Aqui criei 2 variáveis: 'numero' para armazenar o número digitado pelo usuário, e 'resultado' inicializado como 0 para acumular a soma dos números positivos.
let numero, resultado = 0;

// // Dentro do 'do', o programa solicita ao usuário que digite um número inteiro. O loop continuará até que o número digitado seja 0.
do {
    numero = leia.questionInt("\nDigite um numero inteiro: ");
    if (numero > 0) {// Se o número for maior que 0 (positivo), ele será somado ao resultado. Números negativos e 0 não são somados.
        resultado += numero;// Soma o número positivo ao 'resultado'. Exemplo: se o número for 10, ele será somado. Se o próximo for 5, o resultado passa a ser 15.
    }

} while (numero !== 0); resultado += numero; // O loop continuará enquanto o número digitado for diferente de 0. Quando for 0, o programa sairá do loop.

// Aqui, exibo a soma acumulada de todos os números positivos digitados pelo usuário.
console.log("\nA soma dos números positivos é: " + resultado);

// Basicamente ele vai ignorar os que for menor que 0, e somar só os numeros positivos, maior que 0, no final eu encerro digitando o 0
