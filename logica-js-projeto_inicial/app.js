alert('Bem Vindo ao Número Misterio');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Digite um numero entre 1 a 10');

// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Boa! Você acertou ${numeroSecreto}`);
} else{
    if (chute >numeroSecreto ) {
        alert(`número secreto é menor que ${chute}`);
    } else{
        alert(`número secreto é maior que ${chute}`);
    }
};
