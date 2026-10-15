// EXEMPLO 08 - Callback que só será executado mais tarde.

function mostrarAviso () {
    console.log("Tempo encerrado!");
}

//Esta mensagem aparecee imediatamente.
console.log("Iniciando contagem...");

//setTimeout é uma função pronta do JS
//Recebe (1) o callback e (2) o tempoo de espera em milissegundos
//3000 milissegundos = apoximadamente 3 segundos
setTimeout(mostrarAviso, 5000);

//Esta mensagem também aparece ates do callback, pois o código
//NÃO fica parado aguardando os três segundos.
console.log("O programa continua executando...");