alert('Bem Vindo ao Número Misterio');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

// enaquanto chute nao for igual a n.s
while (chute != numeroSecreto) {
    chute = prompt('Digite um numero entre 1 a 10');
    // se chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Boa! Você acertou ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
    if (chute >numeroSecreto ) {
        alert(`número secreto é menor que ${chute}`);
    } else{
        alert(`número secreto é maior que ${chute}`);
    }
};
    //tentativas = tentativas +1;
    tentativas++
}
}
 