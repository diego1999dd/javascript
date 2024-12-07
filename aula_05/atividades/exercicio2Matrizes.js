const leia = require('readline-sync')

// Defini as var: soma,diagonal e uma const matrizInteiros, porque os numeros nao serao alterados
const matrizInteiros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somaPrincipal = 0
let somaSecundaria = 0
let diagonalPrincipal = [];
let diagonalSecundaria = [];

// Aqui esta acontecendo o processamento dos dados
for (let linhas = 0; linhas < 3; linhas++) {// Laço de repetiçao para percorrer as linhas da matriz
    for (let colunas = 0; colunas < 3; colunas++) {// Laço de repetiçao para percorrer as colunas da matriz
        // Descobrir os elementos da diagonal principal
        if (linhas === colunas) {// Verifica-se posicao linha é igual a posicao coluna
            diagonalPrincipal.push(matrizInteiros[linhas][colunas])// Verifica qual o valor armazenado quando posicao é verdadeira
            somaPrincipal += matrizInteiros[linhas][colunas]// Condiçao para somar os valores da diagonal principal 
        }

        // Descobrir os elementos da diagonal secundaria
        if (linhas + colunas === 2) {// Verifica-se posicao linha + a posicao colunas é igual a 2
            diagonalSecundaria.push(matrizInteiros[linhas][colunas])
            somaSecundaria += matrizInteiros[linhas][colunas]// Condiçao para somar os valores da diagonal secundaria 
        }
    }



}

console.log("\nMatriz")


console.table(matrizInteiros);

console.log("\nElementos da Diagonal Principal: ", diagonalPrincipal)
console.log("Elementos da Diagonal Secundaria: ", diagonalSecundaria)
console.log("Soma dos Elementos da Diagonal Principal: ", somaPrincipal)
console.log("Soma dos Elementos da Diagonal Secundaria: ", somaSecundaria)
