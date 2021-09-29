function somar(numeroA, numeroB, operacao) {
    return numeroA + numeroB
}

function subtrair(numeroA, numeroB, operacao) {
    return numeroA - numeroB
}

function multiplicar(numeroA, numeroB, operacao) {
    return numeroA * numeroB
}

function dividir(numeroA, numeroB, operacao) {
    return numeroA / numeroB
}

function calculadora(numeroA, numeroB, operacao) {
    return operacao(numeroA, numeroB)
}

console.log(calculadora(somar(2, 5)))