const dividir = require('./dividir')
const multiplicar = require('./multiplicar')
const somar = require('./somar')
const subtrair = require('./subtrair')

var resultadoDivisao = (dividir(10, 5))
var resultadoMultiplicacao = (multiplicar(10, 5))
var resultadoSomar = (somar(10, 5))
var resultadoSubtrair = (subtrair(10, 5))

console.log(resultadoDivisao)
console.log(resultadoMultiplicacao)
console.log(resultadoSomar)
console.log(resultadoSubtrair)
