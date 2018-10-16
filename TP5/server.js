var http=require('http')
var url=require('url')
var fs= require('fs')
var pug= require('pug')

var estilo = /w3\.css/g
var index= /index/g
var tipo=/tipo/g

http.createServer((req,res)=>{
    var purl = url.parse(req.url,true)
    if(index.test(purl.pathname)){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('json/m1.json',(erro,dados)=>{
            
        })
    }
    else if(estilo.test(purl.pathname)){
        res.writeHead(200,{'Content-Type':'text/css'});
        fs.readFile('estilo/w3.css',(erro,dados)=>{
            if(!erro){
                res.write(dados);
            }
            else{
                res.write('<P><b>erro</b></p>')
            }
         res.end();
        })
    }
   
}).listen(5000, () => {
    console.log('Servidor à ligado na porta 5000...CTRL+C para finalizar');
});
