function multiplicar(valorA, valorB) {
    let multiplicacao = valorA*valorB
    if (valorA === 0 || valorB === 0) {
        return 0
    }else {
        return `${valorA} * ${valorB} = ${multiplicacao}` 
    }
    
}


module.exports = multiplicar