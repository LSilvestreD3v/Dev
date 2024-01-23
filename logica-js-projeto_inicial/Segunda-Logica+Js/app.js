let numeroSecreto = gerarNumeroAleatorio(); // Função para gerar numero

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Desafio Secreto') //funçao de exibiçao
exibirTextoNaTela('p','escolha um numero de 1 a 10'); //funcao de exibiçao

function verificarChute(){ // funçao de verificar 
    let chute = document.querySelector('input'). value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(params) { //comando para gerar numero e retorna
    return parseInt(Math.random() * 10 + 1)
}