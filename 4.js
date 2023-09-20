var vetor = new Array(2, 3, 4, 5, 6, 7);
var contador = 0;

for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        contador++;
    }
}

console.log(contador);
