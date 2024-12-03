const leia = require('readline-sync')


let salario, abono, novoSalario;

console.log("Bem-Vindo",)


salario = leia.questionFloat("Digite o Salario: ",);
console.log(`O Salário informado foi: ${salario}`);

abono = leia.questionFloat("Digite o Abono: ",);
console.log(`O Abono informado foi: ${abono}`);

novoSalario = salario + abono;

console.log("Seu novo salario é: ", novoSalario)


