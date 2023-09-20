var vetor = new Array(2, 4, 6, 8, 10);

var ordenado = true;

for (var i = 0; i < vetor.length - 1; i++) {
    if (vetor[i] > vetor[i + 1]) {
        ordenado = false;
        break;
    }
}

if (ordenado) {
    console.log("Sim");
} else {
    console.log("Não");
}
