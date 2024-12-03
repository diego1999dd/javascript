const leia = require('readline-sync')

let n1, n2

n1 = leia.questionInt("\nDigite o primeiro numero: ")
n2 = leia.questionInt("\nDigite o segundo numero: ")

console.log("\nA Variável N1 possui um valor: ",n1)
console.log("\nA Variável N2 possui um valor: ",n2)

//soma = n1 + n2

console.log("A Soma de n1 + n2 é igual a: ", n1 + n2)
console.log("A Subtracao de n1 - n2 é igual a: ", n1 - n2)
console.log("A Multiplicacao de n1 * n2 é igual a: ", n1 * n2)
console.log("A Divisao de n1 / n2 é igual a: ", n1 / n2)
console.log("A Potenciacao de n1 ^ n2 é igual a: ", Math.pow(n1 , n2))
console.log("A Raiz Quadrada de n1 é igual a: ", Math.sqrt(n1))
