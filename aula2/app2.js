const fs = require('fs');
const moment = require('moment');
const superherois = require('./superherois')

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8')
let data = moment().format('MM do YY')
console.log(superherois)

