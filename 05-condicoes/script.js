//EXEMPLO 05- Callback com if/else.

// O callback decide o que escrever conforme a teperatura recebida.
function verificarTemperatura(temperatura) {
    if (temperatura >= 30) {
        console.log("Está muito quente");
    } else {
        console.log("Temperatura agradável!");
    }
}

//Esta função é genérica: não sabe nada sobre temperatura.
function analisar(valor,callback) {
    callback(valor); //Entrega o valor á função recebida
}

analisar(35, verificarTemperatura); //Mostra:Está muito quente!
analisar(22, verificarTemperatura); //Mostra: Temperatura agradável!