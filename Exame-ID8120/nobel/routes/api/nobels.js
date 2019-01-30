var express = require('express');
var router = express.Router();
var Nobels = require('../../controllers/nobels')

// Get premios
router.get('/premios', function(req,res){

    if (req.query.categoria && req.query.data) {
        var categoria=req.query.categoria
        var data=req.query.data
        Nobels.listaPremios_Categoria_Ano(categoria, data)
            .then(dados => res.jsonp(dados))
            .catch(erro=> res.status(500).jsonp(erro))
    } 
    else if (req.query.categoria) {
        var categoria=req.query.categoria
        Nobels.listaPremiosCategoria(categoria)
            .then(dados => res.jsonp(dados))
            .catch(erro=> res.status(500).jsonp(erro))
    }
    else {
        Nobels.listarPremios()
            .then(dados => res.jsonp(dados))
            .catch(erro=> res.status(500).jsonp(erro))
    }
})

// Get premio id
router.get('/premios/:id', function(req,res){
    var id=req.params.id
    Nobels.getPremio(id)
        .then(dados => res.jsonp(dados))
        .catch(erro=> res.status(500).jsonp(erro))
})

// Get lista categorias
router.get('/categorias', function(req,res){
    Nobels.listarCategorias()
        .then(dados => res.jsonp(dados))
        .catch(erro=> res.status(500).jsonp(erro))
})

// Get lista laureados - ainda a corrigir
router.get('/laureados', function(req, res) {
    Nobels.listarlaureados()
        .then(dados => res.jsonp(dados))
        .catch(erro=> res.status(500).jsonp(erro))
});

module.exports = router;