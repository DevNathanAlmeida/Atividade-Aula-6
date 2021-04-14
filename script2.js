//SERVIÇO SAUDAÇÃO
var http = require('http');
var url = require('url');
var calcular = require('./matematica.js')

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta
    var txt = `Resultado ${calcular(q.n1,q.n2,q.opcao)}`; //consultando um atributo da url, no caso chamado nome
    res.end(txt); //imprime o texto na tela
}).listen(4000); //porta de conexão