const leia = require('readline-sync')

// Criação das variáveis:
// - `idade` começa com o valor 1 para iniciar o loop.
// - `pessoasMenores` conta quantas pessoas têm menos de 21 anos.
// - `pessoasMaiores` conta quantas pessoas têm mais de 50 anos.
let idade = 1
let pessoasMenores = 0
let pessoasMaiores = 0

// Enquanto a idade for maior que 0, o programa continuará pedindo idades
while (idade > 0) {
    idade = leia.questionInt('Digite uma idade: ')// Solicita ao usuário que digite uma idade.

    // Se a idade for maior que 0 e menor que 21, conta como uma pessoa menor de 21 anos.
    if (idade < 21 && idade > 0) {//idade tem que ser menor que 21
        pessoasMenores++ // Incrementa o contador de pessoas menores de 21.
    }

    // Se a idade for maior que 50, conta como uma pessoa maior de 50 anos.
    if (idade > 50) {//idade tem que ser maior que 50
        pessoasMaiores++// Incrementa o contador de pessoas maiores de 50.
    }
}

console.log(`Total de pessoas menores de 21 anos: ${pessoasMenores}`)
console.log(`Total de pessoas maiores de 50 anos: ${pessoasMaiores}`)