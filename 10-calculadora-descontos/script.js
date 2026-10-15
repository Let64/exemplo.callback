//EXEMPLO 10 - Callback que devolve um valor com return.

function descontoDez(valor) {
    return valor * 0.90;
}

function descontoVinte(valor) {
    return valor * 0.80;
}

//Rcebe o preço original e a função que aplicará o desconto.
function calcular(preco, callback) {
    const resultado = callback(preco); // Guarda o valor reotornado pel callback;
    console.log("Preço final:", resultado.toFixed(2)); 
}

calcularPreco(100, descontoDez); //SAÍDA: Preco final: 90.00
calcularPreco(100, descontoVinte); //SAÍDA: Preco final: 80.00