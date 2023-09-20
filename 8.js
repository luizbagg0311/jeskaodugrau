var vetor = [1, 2, 2, 3, 4, 4, 5];

var vetorSemDuplicatas = [];

for (var i = 0; i < vetor.length; i++) {
    var elementoAtual = vetor[i];
    var duplicado = false;

    for (var j = 0; j < vetorSemDuplicatas.length; j++) {
        if (elementoAtual === vetorSemDuplicatas[j]) {
            duplicado = true;
            break;
        }
    }

    if (!duplicado) {
        vetorSemDuplicatas.push(elementoAtual);
    }
}
console.log(vetorSemDuplicatas);

