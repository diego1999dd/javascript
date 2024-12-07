const leia = require('readline-sync') // Importa o módulo readline-sync para permitir a leitura de entradas do usuário no console

// Aqui defini a variavel vetorInteiros
let vetorInteiros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]; // Um vetor (array) contendo 10 números inteiros, que será usado para a busca

// O usuario coloca o numero para a busca
let numeroBuscado = leia.questionInt('Digite o numero que voce deseja encontrar:') // O usuário digita um número que deseja procurar no vetor. Esse valor é armazenado na variável 'numeroBuscado'

// Aqui irá buscar na posição do vetor, se tem o número que o usuário digitou usando a função indexOf
let posicao = vetorInteiros.indexOf(numeroBuscado) // A função indexOf retorna a posição do elemento dentro do vetor. Se o número estiver no vetor, a função retorna o índice (posição), caso contrário, retorna -1.

if (posicao !== -1) { // Se posicao for diferente de -1, significa que o número foi encontrado no vetor
    console.log(`O número ${numeroBuscado} foi encontrado na posição ${posicao}`) // Exibe a mensagem com o número encontrado e sua posição no vetor
} else { // Caso o número não tenha sido encontrado, ou seja, se a posição for -1
    console.log(`O número ${numeroBuscado} nao foi encontrado!`) // Exibe mensagem indicando que o número não foi encontrado no vetor
}
