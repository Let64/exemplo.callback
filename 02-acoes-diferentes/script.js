//EXEMPLO 02- A mesma função executando ações diferntes.

function ligar () {
    console.log("Máquina ligada!");
}

function desligar () {
    console.log("Máquina desigada!");
}

//"acao" é o nome do parâmetro quevai guardar a função recebida.
function controlarMaquina(acao) {
    acao(); //Executa a função que foi recebida neste momento
}

controlarMaquina(ligar); //Enttrega a funcao ligar
controlarMaquina(desligar); //Agora entrega a funcao desligar
//SAÍDA Máquina ligada / Máaquina desligada!