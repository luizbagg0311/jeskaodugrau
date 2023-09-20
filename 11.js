function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (var i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}
var vetor = [2, 3, 7, 10, 13];

var apenasPrimos = true;

for (var i = 0; i < vetor.length; i++) {
    if (!ehPrimo(vetor[i])) {
        apenasPrimos = false;
        break;
    }
}

if (apenasPrimos) {
    console.log("Sim");
} else {
    console.log("Não");
}
