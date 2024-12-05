const leia = require('readline-sync')

// basicamente aqui fiz o menu do cardapio para o cliente escolher
console.log('\n***Cardapio***\n')
console.log('1 --- Cachorro Quente --- R$ 10.00')
console.log('2 --- X-Salada --- R$ 15.00')
console.log('3 --- X-Bacon --- R$ 18.00')
console.log('4 --- Bauru --- R$ 12.00')
console.log('5 --- Refrigerante --- R$ 8.00')
console.log('6 --- Suco de laranja --- R$ 13.00\n')

// aqui fiz as variaveis para entrada e saida de dados
let codigoProduto = leia.questionInt('Qual produto voce gostaria?:')
let quantidadeComprada = leia.questionInt('Qual a quantidade:')
let valorTotal
let nomeProduto

//aqui escolhi o codigoProduto para poder fazer o case, e para o usuario escolher o produto, somando tudo e dando o valor total no final
switch (codigoProduto) {
    case 1:
        nomeProduto = "Cachorro Quente"
        valorTotal = quantidadeComprada * 10.00
        break
    case 2:
        nomeProduto = "X-Salada"
        valorTotal = quantidadeComprada * 15.00
        break
    case 3:
        nomeProduto = "X-Bacon"
        valorTotal = quantidadeComprada * 18.00
        break
    case 4:
        nomeProduto = "Bauru"
        valorTotal = quantidadeComprada * 12.00
        break
    case 5:
        nomeProduto = "Refrigerante"
        valorTotal = quantidadeComprada * 8.00
        break
    case 6:
        nomeProduto = "Suco de laranja"
        valorTotal = quantidadeComprada * 13.00
        break
    default:
        console.log('Faixa Etária Inválida!')
        process.exit(0)
}
// aqui criei um console, onde exibe o produto que o usuario escolheu, e o valortotal somado de quantas quantidades ele escolheu
console.log(`Voce escolheu o ${nomeProduto} e o valor total é de: ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(valorTotal)}\n`)