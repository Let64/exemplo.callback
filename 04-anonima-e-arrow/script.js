//EXREMPLO 4- Callback anõnimo e arrow function

function executar(acao) {
    acao();//Executa a função que vier como argumento
}

//Aqui criamos uma função SEM NOME diretamente dentro da chamada
executar(function () {
    console.log("Funcionaou com função anônima!");
});

//Arrow function é uma escrita mais curta para criar uma funçaõ.
//O símbolo => pode ser lido como "vai executar isto" neste exemplo.
executar (() => {
    console.log("Funcionou com arrow function!");
});

//Nos dois casos, a função só está executada porque executar() chama acao().