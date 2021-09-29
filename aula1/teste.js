let alunos = ["João", "Pedro", "Jorge", "Francisco"]


let indiceJoao = alunos.indexOf("João")
console.log(indiceJoao)
let indiceFrancisco = alunos.indexOf("Francisco")
console.log(indiceFrancisco)

let cincoNumeros = () => [1,2,3,4,5]

console.log(cincoNumeros([1,2,3,4,5]))

let multiplicarPorDois = n => n*2

console.log(multiplicarPorDois(10))

let mostrarNome = () => "Meu nome é ryan Dahl"

console.log(mostrarNome("Olá"))

let dia = "sabado";

function fimDeSemana(dia){
	switch (dia) {
        case 'segunda':
            console.log('você tem aula')
            break;
        case 'quarta':
            console.log('você tem aula')
            break
        case 'sexta-feira':
            console.log('você tem aula')
            break
        default:
            console.log('você esta de folga')
          
    }
}

fimDeSemana(dia)


function papagaio(ola) {
    for(let fala = 1; fala <= 5; fala ++) {
        return ola
    }
}

console.log("Olá")

const somar = (numeroA, numeroB) => numeroA + numeroB

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10, 20, somar))

const data = new Date('August 19, 1975 23:15:30')
data.setFullYear(99)
data.setMonth(09)
data.setDate(23)
console.log(data)