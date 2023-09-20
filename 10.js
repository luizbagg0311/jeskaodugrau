var vetor = [1, 2, 3, 2, 1];

var palindromo = true;

for (var i = 0; i < vetor.length / 2; i++) {
    if (vetor[i] !== vetor[vetor.length - 1 - i]) {
        palindromo = false;
        break;
    }
}

if (palindromo) {
    console.log("É palíndromo!");
} else {
    console.log("Não é palíndromo.");
}
