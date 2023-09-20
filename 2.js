var vetor = new Array(10, 20, 30, 40, 50);

var soma = 0;

for (var i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

var media = soma / vetor.length;

console.log(media);
