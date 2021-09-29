function dividir(valorA, valorB) {
    let divisao = valorA / valorB
    if (valorA === 0 || valorB === 0) {
        return "Não se pode dividir por zero"   
    }else {
        return `${valorA} / ${valorB} = ${divisao}`
    }
    
}


module.exports = dividir