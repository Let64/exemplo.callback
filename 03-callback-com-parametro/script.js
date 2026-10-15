//EXEMPLO 03 - Passar um valor para a função callback

//Recebe um número e exibe seu dobro.
function mostrarDobro(valor) {
    console.log(valor * 2);
}

//Esta função recebeu DUAS coisas: um valor e um função.
function processar(valor,acao) {
    acao(valor); //Executao callback e entrega o número a ele.
}

processar(5, mostrarDobro);
//Onúmero 5 chega em processar; depois vai para mostrar dobro.
//SAÍDA: 10