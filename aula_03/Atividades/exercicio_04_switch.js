const leia = require('readline-sync')

// Basicamente aqui fiz o menu do cargo e percentual para o cliente escolher o cargo
console.log('\n***Cargo e percentual***\n')
console.log('1 --- Gerente --- 10%')
console.log('2 --- Vendedor --- 7%')
console.log('3 --- Supervisor --- 9%')
console.log('4 --- Motorista --- 6%')
console.log('5 --- Estoquista --- 5%')
console.log('6 --- Técnico de TI --- 8%\n')
console.log('\n Bem-Vindo(a):')

//Criei as variaveis para o usuario inserir o nome dele, o cargo que ele quer, e no final o valor do novosalario é exibido!
let nome = leia.question('Qual o seu nome?:')
let codigoCargo = parseInt(leia.question('Qual o seu cargo?: '))
let salario = parseFloat(leia.question('Qual o seu salario?: '))
let novoSalario
let nomeCargo

// Peguei aqui o codigo que o usuario escolheu, e somei o reajuste
switch (codigoCargo) {
    case 1:
        nomeCargo = "Gerente"
        novoSalario = salario + (salario * 0.10)
        break
    case 2:
        nomeCargo = "Vendedor"
        novoSalario = salario + (salario * 0.07)
        break
    case 3:
        nomeCargo = "Supervisor"
        novoSalario = salario + (salario * 0.09)
        break
    case 4:
        nomeCargo = "Motorista"
        novoSalario = salario + (salario * 0.06)
        break
    case 5:
        nomeCargo = "Estoquista"
        novoSalario = salario + (salario * 0.05)
        break
    case 5:
        nomeCargo = "Técnico de TI"
        novoSalario = salario + (salario * 0.08)
        break
    default:
        console.log('Cargo errado!')
        process.exit(0)
}

// Aqui no final exibe o nome do usuario, o cargo e por ultimo o seu novoSalario convertido em reais
console.log(`Olá ${nome}, o seu cargo é de ${nomeCargo}, e o seu novo salário é: ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(novoSalario)}\n`)