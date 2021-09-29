const catalogo = require('./catalogo.json')

function buscarFilme(codigo) {
    let buscando = catalogo.find(cod => cod.codigoFilme == codigo) 
    return buscando
}
console.log(buscarFilme(1245))