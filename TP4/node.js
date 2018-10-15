var http = require('http');
var fs = require('fs');
var url= require('url')
http.createServer((req, res) => {
  var purl=url.parse(req.url,true)
    console.log(purl);
    var q=purl.query
    var file='website/html/obra'+q.id+'.html';
    var obras='/obra?id='+q.id;
    if(req.url ===obras){
    fs.readFile(file, (erro, dados) => {
        res.writeHead(200, {'Content-Type': 'text/html'});

        if (!erro)
            res.write(dados);
        else
            res.write(erro);

        res.end();
    });
  } else {
    fs.readFile('website/index.html', (erro, dados) => {
        res.writeHead(200, {'Content-Type': 'text/html'});

        if (!erro)
            res.write(dados);
        else
            res.write(erro);

        res.end();
    });
  }
}).listen(2121, () => {
    console.log('Servidor à ligado na porta 2121...');
});
