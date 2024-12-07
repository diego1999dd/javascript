const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero: ')

//vai do 1 ao 10, onde o contador tem que ser igual a 1, o contador ser menor ou igual a 10; por fim o pos incremento
for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numero} X ${contador} = ${numero * contador}`)
}
