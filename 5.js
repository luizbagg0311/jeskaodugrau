var vetor = new Array(10, 20, 30, 40, 50);
var elemento = 30;
var encontrado = false;

for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] === elemento) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log(elemento);
} else {
    console.log(elemento);
}
