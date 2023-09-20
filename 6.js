var vetor = new Array(1, 2, 3, 4, 5);
var vetorInvertido = new Array(vetor.length);

var j = 0;

for (var i = vetor.length - 1; i >= 0; i--) {
    vetorInvertido[j] = vetor[i];
    j++;
}

console.log(vetorInvertido);
