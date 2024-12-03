const leia = require('readline-sync')

//defini as variaveis
let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

//dados em float para o usuario digitar
salarioBruto = leia.questionFloat("\nDigite o Salario Bruto: ");
adicionalNoturno = leia.questionFloat("\nDigite o Adicional Noturno: ");
horasExtras = leia.questionFloat("\nDigite as horas extras: ");
descontos = leia.questionFloat("\nDigite os descontos: ");

//calculo final
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log("Salário Líquido é: ", salarioLiquido)