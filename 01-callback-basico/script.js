//EXEMPLO 01 - Callback básico
//Objetivo: entender que podemos ENTREGAR uma funcao para outra função.

//Esta funcao sabe qual mensagem deve mostrar
function dizerOla() {
    console.log("Olá, turma");
}

//O padrão "funcaoRecebida" receberá uma funnção
//O noe do parâmetro é livre: não precisa se chamar "callback"
function executar(funcaoRecebida) {
    funcaoRecebida();
}

//Sem parenteses: entregamos a função dizerOla, sem executa-lá aqui.
executar(dizerOla);
//SAÍDA: Olá, turma!