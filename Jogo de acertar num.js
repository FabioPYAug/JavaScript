alert("Boas vindas ao site!");
let chute;
let numerodificuldade = 0;
while (numerodificuldade <= 0){
    numerodificuldade = prompt("Escolha o número máximo! Lembrando que não pode ser igual ou menor que 0! E o valor mínimo não será negativo!");
    if (numerodificuldade <= 0){
        alert("Este valor é inapropriado! Tente novamente.");
    }
}
let numeroSecreto = parseInt(Math.random() * numerodificuldade + 1)
console.log(numeroSecreto);
let contador = 1

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numerodificuldade}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute){
            alert("O número secreto é maior");
        }else{
            alert("O número secreto é menor");
        }
        contador++;
    }
}

let palavratentativa = tentavias > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você acertou! ${numeroSecreto} e você fez em: ${contador} ${palavratentativa}`);