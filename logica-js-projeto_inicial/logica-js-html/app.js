let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Desafio Secreto')
exibirTextoNaTela('p','escolha um numero de 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input'). value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(params) {
    return parseInt(Math.random() * 10 + 1)
}