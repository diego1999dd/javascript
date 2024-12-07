const leia = require('readline-sync')

// Armazena os dados no indice
let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

let vetorInteiros = new Array(5)

let vetorNumeros = [7, 5, 9, 1, 3, 2, 6, 4, 8, 10]

for (let contador = 0; contador < vetorStrings.length; contador++) {
    console.log(vetorStrings[contador])
}


console.log("O Tamanho do Vetor de Strings é:", vetorNumeros.length)

//for (let contador = 0; contador < vetorInteiros.length; contador++) {
//vetorInteiros[contador] = leia.questionInt('Digite um numero:')
//}

console.table(vetorInteiros)

//sort faz a ordenacao dos dados
console.table(vetorStrings.sort())
// a - b faz a ordenacao em ordem crescente e b - a decrescente, se for strings nao precisa usar a e b, mas em caso de int, numeros precisa usar
console.table(vetorNumeros.sort((a, b) => a - b))

//console.log("Existe o numero 2?:", vetorNumeros.indexOf(2))// aqui puxa o numero onde voce quer para ver a posica do indice