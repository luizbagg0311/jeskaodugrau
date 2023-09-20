var vetor = [10, 5, 20, 15, 30];
var n1 = -1;
var n2 = -1;

for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] > n1) {
        n2 = n1;
        n1 = vetor[i];
    } else if (vetor[i] > n2 && vetor[i] !== n1) {
        n2 = vetor[i];
    }
}

console.log(n2);
