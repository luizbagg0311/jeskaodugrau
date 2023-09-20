var vetor = new Array(7, 3, 9, 2, 5);

var n1 = vetor[0];

for (var i = 1; i < vetor.length; i++) {
    if (vetor[i] > n1) {
        n1 = vetor[i];
    }
}

console.log(n1);
