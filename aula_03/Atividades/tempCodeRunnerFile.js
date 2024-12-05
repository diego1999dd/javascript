console.log(`Voce escolheu o ${nomeProduto} e o valor total é de: ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(valorTotal)}\n`)