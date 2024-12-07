const leia = require('readline-sync')

// Criação das variáveis:
// - `numero1` e `numero2` armazenam os dois números digitados pelo usuário.
// - `valor` será usado para iterar no intervalo entre `numero1` e `numero2`.
let numero1 = leia.questionInt('Digite o primeiro numero: ') // Solicita ao usuário o primeiro número inteiro.
let numero2 = leia.questionInt('Digite o segundo numero: ') // Solicita ao usuário o segundo número inteiro.
let valor // Declara a variável que será usada no loop mais tarde.

// Verificação se o intervalo é válido:
// Caso o `numero1` seja maior ou igual a `numero2`, o programa considera o intervalo inválido e termina a execução.
if (numero1 >= numero2) {
    console.log('Esse intervalo e invalido') // Exibe mensagem de erro ao usuário.
    process.exit() // Encerra imediatamente a execução do programa.
} else {
    // Caso contrário, o intervalo é válido, e o programa continua.
    console.log(`No intervalo entre ${numero1} e o ${numero2}: `) // Exibe o intervalo definido pelo usuário.

    // Loop que percorre o intervalo:
    // - Começa no valor de `numero1` (valor inicial).
    // - Continua enquanto `valor` for menor ou igual a `numero2` (condição).
    // - Incrementa `valor` em 1 a cada iteração.
    for (valor = numero1; valor <= numero2; valor++) { // ([Inicialização]; [Condição]; [Incremento])

        // Verifica se o número atual (`valor`) é múltiplo de 3 e 5:
        // - `valor % 3 === 0` verifica se o número é divisível por 3.
        // - `valor % 5 === 0` verifica se o número é divisível por 5.
        // - O operador lógico `&&` exige que ambas as condições sejam verdadeiras.
        if (valor % 3 === 0 && valor % 5 === 0) {
            console.log(`${valor} é multiplo de 3 e 5`) // Exibe o número que atende às condições.
        }
    }
}

