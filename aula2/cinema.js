let cinema = "nome da loja"
let readline = require('readline')
let catalogo = require('./database/catalogo.json')

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual o cinema gostaria de ver as sessões?\n", function(answer) {
    let cinema = answer;
    console.log(cinema);
    console.log("Sessões para o cinema: " + cinema)
    leitor.close()
})


function adicionarFilme(codigoFilme, tituloFilme, duracaoFilme, elenco, anoLancamento, filmeEmCartaz){
    if (catalogo.indexOf(codigoFilme) == -1){
        let filme = {
            codigo: codigoFilme,
            titulo: tituloFilme,
            duracao: duracaoFilme,
            atores: elenco,
            anoDeLancamento: anoLancamento,
            emCartaz: filmeEmCartaz
        }
        catalogo.push(filme);
    }else{
        console.log('Filme já adicionado')
    }
}

adicionarFilme(3,'Senhor dos Anéis - As Duas Torres',179, ['Elijah Wood','Viggo Mortensen', 'Orlando Bloom','Hugo Weaving'], 2002, true);


let Filmes = catalogo.map





function listandoOsFilmes(filmes) {
    for (let i = 0; i < catalogo.length; i++) {
        console.log("Filme " + i + " " + catalogo[i].titulo)
        
    }
}

function todosOsFilmes(filmes) {
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].emCartaz? console.log(`Está em cartaz ${catalogo[i].titulo}`) : "Não há filmes em cartaz"
        
    }
}

function buscarFilme(codigoFilme){
    let filmeBuscado = catalogo.find(cat => cat.codigo == codigoFilme);
    return filmeBuscado;
}

function alterarStatusEmCartaz(codigoFilme, callback){
    let filmeBusca = callback(codigoFilme)
    filmeBusca.emCartaz ? filmeBusca.emCartaz = false: filmeBusca.emCartaz = true
}

let filme = buscarFilme(3)
console.log(filme)

alterarStatusEmCartaz(3, buscarFilme)

console.log(listandoOsFilmes())
console.log(todosOsFilmes())