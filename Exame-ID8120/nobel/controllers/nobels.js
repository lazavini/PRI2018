var Nobel = require('../models/nobel')
const Nobels = module.exports

// Devolve a lista de premios nobel
Nobels.listarPremios = function() {
    return Nobel
        .find({}, { year:1, category:1 })
        .exec();
}

// Devolve prémio por id
Nobels.getPremio = function(id) {
    return Nobel
        .find({ _id: id })
        .exec()
}

// Devolve lista de categorias
Nobels.listarCategorias = function() {
    return Nobel
        .distinct("category")
        .exec()
}

// Devolve prémios com uma determinada categoria
Nobels.listaPremiosCategoria = function(categoria) {
    return Nobel
        .find({category: categoria})
        .exec()
}

// Devolve prémios com uma determinada categoria
Nobels.listaPremios_Categoria_Ano = function(categoria, ano) {
    return Nobel
        .find({category: categoria, year: {$gt: ano}})
        .exec()
}

// Lista os laureados
Nobels.listarlaureados = function() {
    return Nobel
        .find({},{_id:false,firstname:true,surname:true,year:true,category:true}) // É necessário aceder ao array!
        .sort({firstname:1})
        .exec()     
}




